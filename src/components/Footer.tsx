import { personal } from '../data/resume'
import { sectionAlt } from '../utils/styles'

export default function Footer() {
  return (
    <footer className={`py-8 px-4 sm:px-6 ${sectionAlt} border-t border-amber-200/50 dark:border-white/5`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3
                      text-slate-400 dark:text-slate-600 text-sm text-center">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="text-slate-700 dark:text-slate-400 font-medium">{personal.name}</span>
          {' '}· All rights reserved.
        </p>
        <p className="text-xs">
          Video Annotation & Data Quality Specialist · {personal.location}
        </p>
      </div>
    </footer>
  )
}
