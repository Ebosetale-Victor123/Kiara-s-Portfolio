import { useTheme } from './hooks/useTheme'
import { useDownloadCV } from './hooks/useDownloadCV'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import VideoPortfolio from './components/VideoPortfolio'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { dark, toggle } = useTheme()
  const { downloadCV } = useDownloadCV()

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-200">
      <Navigation dark={dark} toggleTheme={toggle} />
      <main>
        <Hero onDownloadCV={downloadCV} />
        <About />
        <Skills />
        <Experience />
        <VideoPortfolio />
        <Education />
        <Contact onDownloadCV={downloadCV} />
      </main>
      <Footer />
    </div>
  )
}
