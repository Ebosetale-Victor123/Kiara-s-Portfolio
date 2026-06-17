import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import { education } from '../data/resume'
import { card, sectionAlt } from '../utils/styles'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className={`py-20 sm:py-28 px-4 sm:px-6 ${sectionAlt}`}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Academic Background" title="Education" />

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`${card} p-6 sm:p-8`}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-400/10 border border-amber-300 dark:border-amber-400/30 flex items-center justify-center mb-5">
                <GraduationCap size={22} className="text-amber-600 dark:text-amber-400" />
              </div>

              <h3 className="font-heading font-bold text-slate-900 dark:text-white text-xl mb-1">
                {edu.institution}
              </h3>
              <p className="text-amber-600 dark:text-amber-400 font-semibold mb-3">{edu.qualification}</p>

              {edu.status && (
                <span className="inline-block text-xs px-2.5 py-1
                                 bg-amber-100 dark:bg-amber-400/15
                                 border border-amber-300 dark:border-amber-400/30
                                 text-amber-700 dark:text-amber-400
                                 rounded-full mb-3">
                  {edu.status}
                </span>
              )}

              <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-sm">
                <Calendar size={13} />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
