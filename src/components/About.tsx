import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { summary } from '../data/resume'
import { cardGlass, sectionAlt } from '../utils/styles'
import SectionHeading from './SectionHeading'

const highlights = [
  'Social Media Management',
  'Content Strategy & Creation',
  'Creative Problem-Solving',
  'Leadership & Team Coordination',
  'Communication & Customer Relations',
  'Business & Brand Management',
  'Time Management & Organisation',
]

export default function About() {
  return (
    <section id="about" className={`py-20 sm:py-28 px-4 sm:px-6 ${sectionAlt}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Who I Am" title="About Me" />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-5 text-justify sm:text-left">
              {summary}
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base text-justify sm:text-left">
              Based in Lagos, Nigeria, I help brands grow through thoughtful social media
              management, content strategy, and creative direction. Alongside my work in
              digital content, I run my own food business and lead kitchens as a Head Chef.
              I'm committed to continuous growth, building brands, and creating content that
              connects with people.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`${cardGlass} p-6 sm:p-8`}
          >
            <h3 className="font-heading font-semibold text-slate-900 dark:text-white mb-6 text-lg">
              Core Strengths
            </h3>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
