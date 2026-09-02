import { motion } from 'framer-motion'
import { Play, Clock } from 'lucide-react'
import { videos } from '../data/resume'
import { card, sectionPrimary } from '../utils/styles'
import SectionHeading from './SectionHeading'

const gradients = [
  'from-amber-200 to-orange-200 dark:from-amber-900/60 dark:to-[#1e2535]',
  'from-rose-200 to-pink-200 dark:from-rose-900/60 dark:to-[#1e2535]',
  'from-sky-200 to-blue-200 dark:from-sky-900/60 dark:to-[#1e2535]',
]

export default function VideoPortfolio() {
  return (
    <section id="portfolio" className={`py-20 sm:py-28 px-4 sm:px-6 ${sectionPrimary}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Portfolio"
          title="Video Portfolio"
          subtitle="Content campaign walkthroughs, brand content samples, and a personal introduction videos coming soon."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${card} overflow-hidden group`}
            >
              {video.src ? (
                <div>
                  <video
                    src={video.src}
                    controls
                    className="w-full aspect-video object-cover"
                    poster={video.thumbnail}
                    aria-label={video.title}
                  />
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-1">{video.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{video.description}</p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className={`relative w-full aspect-video bg-gradient-to-br ${gradients[i % gradients.length]} flex flex-col items-center justify-center gap-3`}>
                    <div className="w-14 h-14 rounded-full bg-white/50 dark:bg-white/10 border border-white/60 dark:border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Play size={22} className="text-amber-700 dark:text-white/80 translate-x-0.5" />
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-800/60 dark:text-white/40 text-xs">
                      <Clock size={11} />
                      <span>Video coming soon</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-1">{video.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{video.description}</p>
                    <p className="text-xs text-amber-500/70 mt-3">
                      Place .mp4 in /public/videos/ and update resume.ts to activate
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
