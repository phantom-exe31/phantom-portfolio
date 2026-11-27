import Section from './Section.jsx'
import { services } from '../data/site.js'

export default function Services() {
  return (
    <Section id="services" title="Services" intro="What you can hire me to build.">
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border border-line bg-card p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-dim">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
