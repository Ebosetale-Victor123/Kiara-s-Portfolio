import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '../data/resume'
import { card, sectionAlt } from '../utils/styles'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className={`py-20 sm:py-28 px-4 sm:px-6 ${sectionAlt}`}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Work History"
          title="Professional Experience"
          subtitle="A track record of precision, consistency, and content quality across multiple domains."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/70 via-amber-300/30 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.role}-${job.company}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative sm:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-10 h-10 hidden sm:flex flex-shrink-0
                                bg-white dark:bg-[#1e2535]
                                border-2 border-amber-400 dark:border-amber-400/60
                                rounded-full items-center justify-center
                                shadow-md shadow-amber-200/40 dark:shadow-none">
                  <Briefcase size={15} className="text-amber-500 dark:text-amber-400" />
                </div>

                <div className={`${card} p-5 sm:p-7`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg sm:text-xl">
                        {job.role}
                      </h3>
                      <p className="text-amber-600 dark:text-amber-400 font-semibold text-sm sm:text-base">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs whitespace-nowrap
                                    bg-amber-50 dark:bg-white/5
                                    border border-amber-200 dark:border-white/8
                                    px-3 py-1.5 rounded-full self-start">
                      <Calendar size={12} />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
