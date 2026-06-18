import { motion } from 'framer-motion'
import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { personal } from '../data/resume'
import { sectionPrimary } from '../utils/styles'

interface HeroProps {
  onDownloadCV: () => void
}

export default function Hero({ onDownloadCV }: HeroProps) {
  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 ${sectionPrimary}`}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-orange-400/10 dark:bg-rose-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-300/5 dark:bg-slate-700/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 lg:gap-16 items-center pt-24 sm:pt-28 pb-44 sm:pb-16">

        {/* ── Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 md:order-1 text-justify md:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase
                       text-amber-600 dark:text-amber-400
                       border border-amber-300 dark:border-amber-400/30
                       bg-amber-50 dark:bg-transparent
                       rounded-full mb-5"
          >
            Open to opportunities
          </motion.span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-justify md:text-left">
            <span className="text-slate-900 dark:text-white">{personal.name.split(' ')[0]} </span>
            <span className="text-gradient">
              {personal.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="text-amber-600 dark:text-amber-400 font-semibold text-lg mb-2 text-justify md:text-left">
            {personal.headline}
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-base mb-8 md:max-w-md text-justify md:text-left">
            {personal.tagline}
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {[
              { icon: MapPin, text: personal.location, href: undefined },
              { icon: Phone,  text: personal.phone,    href: `tel:${personal.phone}` },
              { icon: Mail,   text: personal.email,    href: `mailto:${personal.email}` },
            ].map(({ icon: Icon, text, href }) => {
              const chipCls = [
                'flex items-center gap-1.5 text-xs sm:text-sm',
                'text-slate-600 dark:text-slate-400',
                'bg-white dark:bg-white/5',
                'border border-amber-200 dark:border-white/10',
                'px-3 py-1.5 rounded-full shadow-sm dark:shadow-none',
                href ? 'hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-300 dark:hover:border-amber-400/40 transition-colors duration-200 cursor-pointer' : '',
              ].join(' ')
              const inner = (
                <>
                  <Icon size={13} className="text-amber-500 dark:text-amber-400 flex-shrink-0" />
                  <span className="truncate max-w-[220px]">{text}</span>
                </>
              )
              return href ? (
                <a key={text} href={href} className={chipCls}>{inner}</a>
              ) : (
                <div key={text} className={chipCls}>{inner}</div>
              )
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <button
              onClick={onDownloadCV}
              className="inline-flex items-center gap-2 px-6 py-3
                         bg-amber-500 hover:bg-amber-400
                         text-white font-semibold rounded-xl
                         shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50
                         transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              <Download size={18} />
              Download CV
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3
                         bg-white dark:bg-white/5
                         border border-slate-200 dark:border-white/15
                         hover:border-amber-400 dark:hover:border-amber-400/50
                         text-slate-700 dark:text-slate-200
                         hover:text-amber-600 dark:hover:text-amber-400
                         font-semibold rounded-xl
                         shadow-sm dark:shadow-none
                         transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* ── Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-amber-300 via-orange-200 to-amber-400 dark:from-amber-400 dark:via-transparent dark:to-orange-400 opacity-30 dark:opacity-50 blur-md" />
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 dark:from-amber-500 dark:to-rose-500 opacity-25 dark:opacity-35" />
            <img
              src={personal.photo}
              alt={`${personal.name} — professional headshot`}
              className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover object-top rounded-full
                         border-4 border-white dark:border-[#1e2535]
                         shadow-2xl shadow-amber-200/60 dark:shadow-black/40"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] text-slate-400 dark:text-slate-600 tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-0.5 h-6 bg-amber-400/40 rounded-full"
        />
      </motion.div>
    </section>
  )
}
