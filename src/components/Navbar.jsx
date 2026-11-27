import { useEffect, useState } from 'react'

const links = ['Projects', 'Services', 'About', 'Skills', 'Contact']

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' }
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
  }, [theme])

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 font-heading font-semibold">
          <img src="/favicon.svg" alt="" className="h-6 w-auto" />
          <span>Phantom<span className="text-electric">.exe</span></span>
        </a>
        <div className="flex items-center gap-2">
          <ul className="hidden gap-6 text-sm text-dim md:flex">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-fg">{l}</a></li>
            ))}
          </ul>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-md border border-line px-3 py-1.5 text-sm text-dim hover:text-fg"
            aria-label="Toggle light and dark theme">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button onClick={() => setOpen(!open)} className="rounded-md border border-line px-3 py-1.5 text-sm md:hidden"
            aria-expanded={open} aria-label="Menu">Menu</button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line px-6 py-3 md:hidden">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2 text-dim">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
