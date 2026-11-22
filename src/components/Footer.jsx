import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-dim">
      <p>{site.tagline}</p>
      <p className="mt-1">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  )
}
