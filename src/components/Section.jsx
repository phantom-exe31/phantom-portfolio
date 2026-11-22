export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-dim">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}
