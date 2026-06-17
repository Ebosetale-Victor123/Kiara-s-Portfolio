import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { personal } from '../data/resume'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio',  href: '#portfolio'  },
  { label: 'Education',  href: '#education'  },
  { label: 'Contact',    href: '#contact'    },
]

interface Props {
  dark: boolean
  toggleTheme: () => void
}

export default function Navigation({ dark, toggleTheme }: Props) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fdf8f3]/90 dark:bg-[#0f1117]/90 backdrop-blur-md shadow-sm shadow-amber-200/30 dark:shadow-black/20 border-b border-amber-200/40 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" className="font-heading font-bold text-lg tracking-tight flex-shrink-0">
          <span className="text-gradient">{personal.name.split(' ')[0]}</span>
          <span className="text-slate-400 dark:text-slate-500 text-sm ml-1.5 font-normal hidden sm:inline">
            {personal.headline}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 flex items-center justify-center rounded-full
                       bg-amber-100 dark:bg-white/10
                       border border-amber-200 dark:border-white/10
                       text-amber-600 dark:text-amber-400
                       hover:bg-amber-200 dark:hover:bg-white/20
                       transition-all duration-200"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full
                       bg-slate-100 dark:bg-white/10
                       border border-slate-200 dark:border-white/10
                       text-slate-600 dark:text-slate-400
                       hover:bg-slate-200 dark:hover:bg-white/20
                       transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#fdf8f3]/95 dark:bg-[#161b27]/95 backdrop-blur-md border-t border-amber-200/50 dark:border-white/5 px-4 py-5">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300
                             hover:bg-amber-100 dark:hover:bg-white/8
                             hover:text-amber-700 dark:hover:text-amber-400
                             font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
