import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Download, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { personal } from '../data/resume'
import { card, sectionPrimary } from '../utils/styles'
import SectionHeading from './SectionHeading'

interface ContactProps {
  onDownloadCV: () => void
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact({ onDownloadCV }: ContactProps) {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputCls = [
    'w-full px-4 py-3 rounded-xl text-sm outline-none',
    'bg-amber-50 dark:bg-[#161b27]',
    'border border-amber-200 dark:border-white/10',
    'text-slate-800 dark:text-slate-200',
    'placeholder-slate-400 dark:placeholder-slate-600',
    'focus:border-amber-400 dark:focus:border-amber-400/50',
    'focus:ring-2 focus:ring-amber-200/40 dark:focus:ring-amber-400/10',
    'transition-all duration-200',
  ].join(' ')

  return (
    <section id="contact" className={`py-20 sm:py-28 px-4 sm:px-6 ${sectionPrimary}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Get in Touch"
          title="Contact"
          subtitle="Available for freelance annotation projects, quality-assurance roles, and AI data-labeling contracts."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

          {/* ── Info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            {/* Contact details */}
            <div className={`${card} p-6 sm:p-7 space-y-5`}>
              {[
                { icon: Phone,  label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}` },
                { icon: Mail,   label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
                { icon: MapPin, label: 'Location', value: personal.location, href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-400/10 border border-amber-300 dark:border-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wide font-semibold">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-sm font-medium">
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-700 dark:text-slate-200 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className={`${card} p-6 sm:p-7`}>
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wide mb-4">Connect</h3>
              <div className="flex flex-col gap-3">
                {personal.linkedin ? (
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-sm font-medium">
                    <Linkedin size={17} /> LinkedIn
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-slate-400 dark:text-slate-600 text-sm">
                    <Linkedin size={17} />
                    LinkedIn — <span className="text-amber-500/60 italic">[Add link in resume.ts]</span>
                  </span>
                )}
                {personal.instagram ? (
                  <a href={personal.instagram} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-sm font-medium">
                    <Instagram size={17} /> Instagram
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-slate-400 dark:text-slate-600 text-sm">
                    <Instagram size={17} />
                    Instagram — <span className="text-amber-500/60 italic">[Add link in resume.ts]</span>
                  </span>
                )}
              </div>
            </div>

            {/* References */}
            <div className={`${card} p-6 sm:p-7`}>
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wide mb-2">References</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Professional references available upon request.</p>
              <a href={`mailto:${personal.email}?subject=Reference%20Request`}
                 className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors">
                <Mail size={14} /> Request References
              </a>
            </div>

            <button
              onClick={onDownloadCV}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 transition-all duration-200 hover:scale-[1.02] text-sm sm:text-base"
            >
              <Download size={18} />
              Download CV (PDF)
            </button>
          </motion.div>

          {/* ── Contact form ── */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onSubmit={handleSubmit}
            className={`${card} p-6 sm:p-8 space-y-5`}
          >
            <h3 className="font-heading font-bold text-slate-900 dark:text-white text-xl">Send a Message</h3>

            {/* Honeypot — hidden from real users, bots fill it, Formspree discards those submissions */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-400/10 border border-green-300 dark:border-green-400/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} className="text-green-600 dark:text-green-400" />
                </div>
                <p className="text-slate-900 dark:text-white font-semibold text-lg mb-1">Message sent!</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Thanks for reaching out — I'll get back to you shortly.
                </p>
                <button type="button" onClick={() => setStatus('idle')}
                  className="mt-5 text-xs text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors underline underline-offset-2">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {status === 'error' && (
                  <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                    placeholder="Your full name" className={inputCls} disabled={status === 'sending'} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                    placeholder="your@email.com" className={inputCls} disabled={status === 'sending'} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className={`${inputCls} resize-none`} disabled={status === 'sending'} />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5
                             bg-amber-500 hover:bg-amber-400 disabled:bg-amber-400/60
                             text-white font-semibold rounded-xl
                             shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40
                             transition-all duration-200 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
