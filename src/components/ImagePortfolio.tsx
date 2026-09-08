import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ImageOff, X } from 'lucide-react'
import portfolioImages from 'virtual:portfolio-images'
import { card, sectionPrimary } from '../utils/styles'
import SectionHeading from './SectionHeading'

export default function ImagePortfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const close = () => setActiveIndex(null)
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + portfolioImages.length) % portfolioImages.length))
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % portfolioImages.length))

  useEffect(() => {
    if (activeIndex === null) return

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>('button')
        if (!focusables || focusables.length === 0) return
        const list = Array.from(focusables)
        const first = list[0]
        const last = list[list.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handler)
    closeBtnRef.current?.focus()
    return () => window.removeEventListener('keydown', handler)
  }, [activeIndex])

  return (
    <section id="image-portfolio" className={`py-20 sm:py-28 px-4 sm:px-6 ${sectionPrimary}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Creative Work"
          title="Image Portfolio"
          subtitle="A curated selection of brand content, food photography, and creative campaigns."
        />

        {portfolioImages.length === 0 ? (
          <div className={`${card} max-w-md mx-auto p-12 text-center`}>
            <ImageOff className="mx-auto mb-3 text-amber-400/70" size={32} />
            <p className="text-slate-500 dark:text-slate-400 font-medium">Images coming soon</p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3" style={{ columnGap: '1rem' }}>
            {portfolioImages.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveIndex(i)}
                style={{ breakInside: 'avoid' }}
                className="block w-full mb-4 rounded-xl overflow-hidden
                           ring-1 ring-amber-100 dark:ring-white/10
                           hover:ring-2 hover:ring-amber-400/50
                           hover:scale-[1.02] transition-all duration-300"
              >
                <img src={src} alt="" loading="lazy" className="w-full h-auto block" />
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              ref={closeBtnRef}
              onClick={close}
              aria-label="Close image"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center
                         rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            >
              <X size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12
                         flex items-center justify-center rounded-full
                         bg-amber-500/20 hover:bg-amber-500/30 text-amber-300
                         border border-amber-400/30 backdrop-blur-sm transition-colors duration-200"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12
                         flex items-center justify-center rounded-full
                         bg-amber-500/20 hover:bg-amber-500/30 text-amber-300
                         border border-amber-400/30 backdrop-blur-sm transition-colors duration-200"
            >
              <ChevronRight size={22} />
            </button>

            <motion.img
              key={activeIndex}
              src={portfolioImages[activeIndex]}
              alt=""
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-[88vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
