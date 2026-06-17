import { useState, createElement } from 'react'
import { personal } from '../data/resume'

export function useDownloadCV() {
  const [loading, setLoading] = useState(false)

  const downloadCV = async () => {
    if (loading) return
    setLoading(true)
    try {
      // Lazy-load the heavy PDF renderer only when the user clicks Download
      const [{ pdf }, { default: CVDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('../components/CVDocument'),
      ])

      const blob = await pdf(createElement(CVDocument)).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${personal.name.replace(/ /g, '_')}_CV.pdf`
      a.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('PDF generation failed:', err)
      const msg = err instanceof Error ? err.message : String(err)
      alert(`PDF error: ${msg}`)
    } finally {
      setLoading(false)
    }
  }

  return { downloadCV, loading }
}
