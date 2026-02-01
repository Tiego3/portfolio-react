import TypingRole from "./TypingRole";

export default function Hero() {
  return (
    <section id="top" className="container-x section-y">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I’m <span className="text-accent">Tiego Mathobela</span>.
        </h1>

        <p className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-200">
          <TypingRole />
        </p>

        <p className="mt-6 text-lg text-slate-700 dark:text-slate-300">
         Software developer with a quality and testing background.
         Open to opportunities where I can contribute to building impactful projects.
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

        
      </div>
    </section>
  );
}
