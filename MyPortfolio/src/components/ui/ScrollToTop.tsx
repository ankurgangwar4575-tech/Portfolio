import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', updateVisibility, { passive: true })
    updateVisibility()

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <button
      type="button"
      aria-label="Scroll back to the top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full border border-cyan-400/50 bg-slate-900 text-lg text-cyan-300 shadow-lg shadow-slate-950/50 transition-colors hover:bg-cyan-400 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
    >
      ↑
    </button>
  )
}
