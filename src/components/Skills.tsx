import { motion } from 'framer-motion'
import { skills } from '../data/resume'
import { sectionPrimary } from '../utils/styles'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className={`py-20 sm:py-28 px-4 sm:px-6 ${sectionPrimary}`}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Capabilities"
          title="Skills & Expertise"
          subtitle="Every skill is drawn directly from hands-on experience across social media, content, and hospitality."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.32 }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium
                         bg-white dark:bg-[#1e2535]
                         border border-amber-200 dark:border-white/10
                         text-slate-700 dark:text-slate-300
                         shadow-sm shadow-amber-100/60 dark:shadow-none
                         hover:bg-amber-100 dark:hover:bg-amber-500/10
                         hover:border-amber-400 dark:hover:border-amber-500/30
                         hover:text-amber-700 dark:hover:text-amber-200
                         transition-colors duration-200 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
