import Section from './Section.jsx'
import { skills } from '../data/site.js'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="rounded-xl border border-line bg-card p-5">
            <h3 className="font-mono text-sm text-accent2">{group}</h3>
            <ul className="mt-3 space-y-1 text-sm">{items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
