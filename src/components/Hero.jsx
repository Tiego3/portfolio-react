export default function Hero() {
  return (
    <section id="top" className="container-x section-y">
      <p className="text-sm muted">Junior React Developer</p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
        Hi, I’m <span className="text-accent">Your Name</span>.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
        I build clean, responsive web interfaces and enjoy turning ideas into
        simple, usable products.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="btn btn-accent">
          View Projects
        </a>

        <a href="#contact" className="btn btn-ghost">
          Contact
        </a>
      </div>

      {/* Small proof strip */}
      <div className="mt-10 flex flex-wrap gap-3 text-sm muted">
        <span className="card py-2 px-4">React</span>
        <span className="card py-2 px-4">Responsive UI</span>
        <span className="card py-2 px-4">Dark mode</span>
        <span className="card py-2 px-4">Deployed on Netlify</span>
      </div>
    </section>
  );
}
