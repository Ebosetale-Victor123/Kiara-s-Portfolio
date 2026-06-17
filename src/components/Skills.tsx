import { motion } from 'framer-motion'
import { Tag, Monitor, Users } from 'lucide-react'
import { skillGroups } from '../data/resume'
import { sectionPrimary } from '../utils/styles'
import SectionHeading from './SectionHeading'

const meta = [
  { icon: Tag,     number: '01', sub: 'Core specialisation' },
  { icon: Monitor, number: '02', sub: 'Digital presence'    },
  { icon: Users,   number: '03', sub: 'Workplace strengths' },
]

function FeaturedCard({ group, m, index }: { group: typeof skillGroups[0]; m: typeof meta[0]; index: number }) {
  const Icon = m.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="relative rounded-2xl overflow-hidden lg:col-span-2
                 bg-white dark:bg-[#1e2535]
                 border border-amber-200/70 dark:border-white/8
                 shadow-lg shadow-amber-100/60 dark:shadow-none
                 hover:shadow-xl hover:shadow-amber-200/60 dark:hover:shadow-amber-500/8
                 hover:border-amber-400/60 dark:hover:border-amber-500/35
                 transition-all duration-300 group"
    >
      {/* Amber top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400" />

      {/* Giant decorative number */}
      <span className="absolute -bottom-6 right-4 text-[120px] font-black leading-none select-none font-heading
                       text-amber-500/[0.05] dark:text-white/[0.03]
                       group-hover:text-amber-500/[0.08] dark:group-hover:text-white/[0.05]
                       transition-colors duration-500">
        {m.number}
      </span>

      <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8">
        {/* Left: icon + title */}
        <div className="sm:w-52 flex-shrink-0">
          <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/25 flex items-center justify-center mb-4">
            <Icon size={20} className="text-amber-600 dark:text-amber-400" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-1">{m.number}</p>
          <h3 className="font-heading font-bold text-slate-900 dark:text-white text-xl leading-tight mb-1">{group.category}</h3>
          <p className="text-slate-400 dark:text-slate-500 text-xs">{m.sub}</p>
          <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400" />
            <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400">{group.skills.length} skills</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px bg-amber-200/50 dark:bg-white/6 self-stretch" />

        {/* Chips */}
        <div className="flex flex-wrap gap-2 content-start">
          {group.skills.map((skill, si) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + si * 0.05, duration: 0.3 }}
              className="inline-block px-3.5 py-1.5 rounded-full text-xs font-medium
                         bg-amber-50 dark:bg-white/5
                         border border-amber-200 dark:border-white/10
                         text-slate-700 dark:text-slate-300
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
    </motion.div>
  )
}

function StandardCard({ group, m, index, wide }: { group: typeof skillGroups[0]; m: typeof meta[0]; index: number; wide?: boolean }) {
  const Icon = m.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className={`relative rounded-2xl overflow-hidden
                 bg-white dark:bg-[#1e2535]
                 border border-amber-200/70 dark:border-white/8
                 shadow-lg shadow-amber-100/60 dark:shadow-none
                 hover:shadow-xl hover:shadow-amber-200/60 dark:hover:shadow-amber-500/8
                 hover:border-amber-400/60 dark:hover:border-amber-500/35
                 transition-all duration-300 group
                 ${wide ? 'lg:col-span-2' : ''}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400" />

      <span className="absolute -bottom-4 right-4 text-[96px] font-black leading-none select-none font-heading
                       text-amber-500/[0.05] dark:text-white/[0.03]
                       group-hover:text-amber-500/[0.08] dark:group-hover:text-white/[0.05]
                       transition-colors duration-500">
        {m.number}
      </span>

      <div className="relative z-10 p-6 sm:p-7">
        <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/25 flex items-center justify-center mb-5">
          <Icon size={20} className="text-amber-600 dark:text-amber-400" />
        </div>

        <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-1">{m.number}</p>
        <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg leading-tight mb-0.5">{group.category}</h3>
        <p className="text-slate-400 dark:text-slate-500 text-xs mb-5">{m.sub}</p>

        <div className="w-full h-px bg-amber-100 dark:bg-white/6 mb-5" />

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, si) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + si * 0.05, duration: 0.28 }}
              className="inline-block px-3 py-1.5 rounded-full text-xs font-medium
                         bg-amber-50 dark:bg-white/5
                         border border-amber-200 dark:border-white/10
                         text-slate-700 dark:text-slate-300
                         hover:bg-amber-100 dark:hover:bg-amber-500/10
                         hover:border-amber-400 dark:hover:border-amber-500/30
                         hover:text-amber-700 dark:hover:text-amber-200
                         transition-colors duration-200 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="mt-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400" />
          <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400">{group.skills.length} skills</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [featured, ...rest] = skillGroups

  return (
    <section id="skills" className={`py-20 sm:py-28 px-4 sm:px-6 ${sectionPrimary}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Capabilities"
          title="Skills & Expertise"
          subtitle="Grouped by domain — every skill is drawn directly from hands-on experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          <FeaturedCard group={featured} m={meta[0]} index={0} />
          {rest.map((group, i) => (
            <StandardCard
              key={group.category}
              group={group}
              m={meta[i + 1]}
              index={i + 1}
              wide={i === rest.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
