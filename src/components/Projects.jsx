import { useState } from 'react'
import Section from './Section.jsx'
import { projects } from '../data/projects.js'

const cats = ['All', ...new Set(projects.map((p) => p.category))]

export default function Projects() {
  const [cat, setCat] = useState('All')
  const shown = projects.filter((p) => cat === 'All' || p.category === cat)
  return (
    <Section id="projects" title="Projects"
      intro="A growing set of full-stack builds. Each one gets a live demo, source code and a short case study when it is ready. Nothing here is presented as client work.">
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full border px-4 py-1.5 text-sm ${cat === c ? 'border-electric bg-electric text-white' : 'border-line text-dim hover:text-fg'}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article key={p.name} className="rounded-xl border border-line bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <span className="font-mono text-xs text-accent2">{p.status}</span>
            </div>
            <p className="mt-1 text-xs text-dim">{p.category}</p>
            <p className="mt-4 text-sm text-dim">{p.desc}</p>
            <div className="mt-5 flex gap-4 text-sm">
              {p.demo && <a href={p.demo} className="text-electric hover:underline">Live demo</a>}
              {p.repo && <a href={p.repo} className="text-electric hover:underline">Source</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
