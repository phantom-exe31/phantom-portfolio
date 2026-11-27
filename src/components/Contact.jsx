import { useState } from 'react'
import Section from './Section.jsx'
import { site } from '../data/site.js'

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const change = (k) => (ev) => setV({ ...v, [k]: ev.target.value })

  async function submit(ev) {
    ev.preventDefault()
    const e = validate(v)
    setErrors(e)
    if (Object.keys(e).length) return
    if (site.formEndpoint) {
      try {
        const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
        if (!r.ok) throw new Error()
        setStatus('Thanks, your message was sent.')
        setV({ name: '', email: '', message: '' })
      } catch { setStatus('Something went wrong. Please try again or email me directly.') }
    } else if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Project enquiry from ' + v.name)}&body=${encodeURIComponent(v.message + '\n\n' + v.email)}`
    } else {
      setStatus('Contact form is not configured yet.')
    }
  }

  const field = 'mt-1 w-full rounded-lg border border-line bg-card px-4 py-2.5 text-fg'
  const err = (k) => errors[k] && <p className="mt-1 text-sm text-red-400" role="alert">{errors[k]}</p>

  return (
    <Section id="contact" title="Contact" intro="Have a project in mind? Tell me about it.">
      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={submit} noValidate className="space-y-4">
          <label className="block text-sm">Name<input className={field} value={v.name} onChange={change('name')} autoComplete="name" />{err('name')}</label>
          <label className="block text-sm">Email<input type="email" className={field} value={v.email} onChange={change('email')} autoComplete="email" />{err('email')}</label>
          <label className="block text-sm">Message<textarea rows="5" className={field} value={v.message} onChange={change('message')} />{err('message')}</label>
          <button className="rounded-lg bg-electric px-6 py-3 font-medium text-white hover:brightness-110">Send message</button>
          {status && <p className="text-sm text-accent2" role="status">{status}</p>}
        </form>
        <ul className="space-y-3 text-dim">
          {site.email && <li>Email: <a className="text-electric hover:underline" href={`mailto:${site.email}`}>{site.email}</a></li>}
          {site.github && <li>GitHub: <a className="text-electric hover:underline" href={site.github} rel="noreferrer">{site.github.replace('https://', '')}</a></li>}
          {site.linkedin && <li>LinkedIn: <a className="text-electric hover:underline" href={site.linkedin} rel="noreferrer">{site.linkedin.replace('https://', '')}</a></li>}
        </ul>
      </div>
    </Section>
  )
}
