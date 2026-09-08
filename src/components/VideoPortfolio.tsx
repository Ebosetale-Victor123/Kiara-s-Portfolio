import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import { videos, type VideoItem } from '../data/resume'
import { card, sectionPrimary } from '../utils/styles'
import SectionHeading from './SectionHeading'

const GAP = 24 // px — matches the track's inline flex gap used in the width math below

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const lg = window.matchMedia('(min-width: 1024px)')
    const md = window.matchMedia('(min-width: 768px)')
    const update = () => setItemsPerView(lg.matches ? 3 : md.matches ? 2 : 1)
    update()
    lg.addEventListener('change', update)
    md.addEventListener('change', update)
    return () => {
      lg.removeEventListener('change', update)
      md.removeEventListener('change', update)
    }
  }, [])

  return itemsPerView
}

export default function VideoPortfolio() {
  const itemsPerView = useItemsPerView()
  const maxIndex = Math.max(0, videos.length - itemsPerView)
  const dotCount = maxIndex + 1

  const [index, setIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Measure the track's viewport so card width can be derived from real
  // pixels — keeps exactly `itemsPerView` cards visible at any window size.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) setContainerWidth(entry.contentRect.width)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  // Auto-advance every 3s; re-armed whenever `index` changes (including
  // manual arrow/dot clicks) so a manual interaction resets the timer
  // instead of stacking with it. Paused while the pointer is over the track.
  useEffect(() => {
    if (isHovering || maxIndex === 0) return
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 3000)
    return () => clearInterval(id)
  }, [index, isHovering, maxIndex])

  useEffect(() => {
    if (!activeVideo) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null)
    }
    window.addEventListener('keydown', handler)
    closeBtnRef.current?.focus()
    return () => window.removeEventListener('keydown', handler)
  }, [activeVideo])

  const goTo = (target: number) => {
    setIndex(((target % dotCount) + dotCount) % dotCount)
  }
  const prev = () => goTo(index === 0 ? maxIndex : index - 1)
  const next = () => goTo(index === maxIndex ? 0 : index + 1)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = e.targetTouches[0].clientX
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
  }

  const cardWidth = containerWidth > 0 ? (containerWidth - (itemsPerView - 1) * GAP) / itemsPerView : 0
  const offset = index * (cardWidth + GAP)

  return (
    <section id="portfolio" className={`py-20 sm:py-28 px-4 sm:px-6 ${sectionPrimary}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Portfolio"
          title="Video Portfolio"
          subtitle="A selection of content campaigns, brand reels, and creative work."
        />

        <div
          ref={containerRef}
          className="relative overflow-hidden touch-pan-y"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: -offset }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          >
            {videos.map((video) => (
              <button
                key={video.title}
                onClick={() => setActiveVideo(video)}
                style={{ flex: `0 0 ${cardWidth}px`, width: cardWidth }}
                className={`${card} group text-left overflow-hidden cursor-pointer transition-all duration-300
                           hover:ring-2 hover:ring-amber-400/50 hover:shadow-lg hover:shadow-amber-400/20`}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full bg-amber-500/90 group-hover:bg-amber-400 backdrop-blur-sm
                                 flex items-center justify-center shadow-lg shadow-amber-500/40
                                 group-hover:scale-110 transition-all duration-300"
                    >
                      <Play size={22} className="text-white translate-x-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-1">{video.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{video.description}</p>
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={prev}
            aria-label="Previous videos"
            className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-amber-500/15 hover:bg-amber-500/25 text-amber-600 dark:text-amber-400
                       border border-amber-300/40 dark:border-amber-400/30
                       backdrop-blur-sm transition-colors duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to video position ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-amber-500' : 'w-2 bg-amber-300/40 dark:bg-amber-400/20 hover:bg-amber-400/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next videos"
            className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-amber-500/15 hover:bg-amber-500/25 text-amber-600 dark:text-amber-400
                       border border-amber-300/40 dark:border-amber-400/30
                       backdrop-blur-sm transition-colors duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-md sm:max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeBtnRef}
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="absolute -top-11 right-0 w-9 h-9 flex items-center justify-center rounded-full
                           bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              >
                <X size={20} />
              </button>
              <video
                key={activeVideo.src}
                controls
                autoPlay
                poster={activeVideo.thumbnail}
                className="w-full max-h-[75vh] rounded-xl bg-black shadow-2xl"
                aria-label={activeVideo.title}
              >
                {/\.mov$/i.test(activeVideo.src) ? (
                  <>
                    {/* .mov files: some browsers only accept the source if it's
                       labelled video/mp4, since the underlying container is
                       MP4-compatible even though the extension is .mov */}
                    <source src={activeVideo.src} type="video/quicktime" />
                    <source src={activeVideo.src} type="video/mp4" />
                  </>
                ) : (
                  <source src={activeVideo.src} type={activeVideo.mimeType} />
                )}
              </video>
              <div className="mt-4 text-center px-2">
                <h3 className="font-heading font-bold text-white mb-1">{activeVideo.title}</h3>
                <p className="text-slate-300 text-sm">{activeVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
