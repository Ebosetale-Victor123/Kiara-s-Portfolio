import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 sm:mb-16"
    >
      <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase
                       text-amber-600 dark:text-amber-400
                       border border-amber-300 dark:border-amber-400/30
                       bg-amber-50 dark:bg-transparent
                       rounded-full mb-4">
        {label}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold
                     text-slate-900 dark:text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base px-4 text-justify sm:text-center">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
