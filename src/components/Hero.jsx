export default function Hero() {
  return (
    <section id="top" className="container-x section-y">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm muted">Junior React Developer</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I’m <span className="text-accent">Your Name</span>.
        </h1>

        <p className="mt-6 text-lg text-slate-700 dark:text-slate-300">
          I build clean, responsive web interfaces and enjoy turning ideas into
          simple, usable products.
        </p>

        <div className="mt-5 flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a href="#projects" className="btn btn-accent">
              View Projects
            </a>

            <a href="#contact" className="btn btn-ghost">
              Contact
            </a>
          </div>

          <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent"
            >
            Download CV
          </a>
        </div>

        {/* Proof strip */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm muted">
          <span className="card py-2 px-4">React</span>
          <span className="card py-2 px-4">Responsive UI</span>
          <span className="card py-2 px-4">Dark mode</span>
          <span className="card py-2 px-4">Deployed on Netlify</span>
        </div>
      </div>
    </section>
  );
}
