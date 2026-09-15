import { useState } from 'react'
import { personal } from '../data/resume'

// Static CV file — place the PDF in /public and update the filename here if it changes.
const CV_FILE = '/Anita Ehiri Ihechi Official CV.pdf'

export function useDownloadCV() {
  const [loading, setLoading] = useState(false)

  const downloadCV = () => {
    if (loading) return
    setLoading(true)
    try {
      const a = document.createElement('a')
      a.href = encodeURI(CV_FILE)
      a.download = `${personal.name.replace(/ /g, '_')}_CV.pdf`
      a.click()
    } finally {
      setLoading(false)
    }
  }

  return { downloadCV, loading }
}
