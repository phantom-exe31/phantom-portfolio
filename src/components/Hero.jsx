export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 py-24 md:py-36">
      <div className="rise">
        <p className="mb-4 font-mono text-sm text-accent2">Full-stack developer</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          I turn ideas into powerful digital experiences.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-dim">
          Web applications, business systems and AI-powered solutions built with purpose.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-lg bg-electric px-6 py-3 font-medium text-white hover:brightness-110">Explore my work</a>
          <a href="#contact" className="rounded-lg border border-line px-6 py-3 font-medium hover:bg-card">Contact me</a>
        </div>
      </div>
    </section>
  )
}
