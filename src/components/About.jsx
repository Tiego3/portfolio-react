export default function About() {
  return (
    <section id="about" className="container-x section-y">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl">About</h2>
        <p className="mt-3 text-sm muted">
          Clear communication. Solid fundamentals. Consistent progress.
        </p>

        <p className="mt-8 text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
          I’m a junior software developer focused on building clean, responsive
          interfaces with a strong emphasis on structure, usability, and
          maintainable code. I enjoy taking a problem, breaking it down, and
          shipping a simple solution that feels polished.
        </p>

        <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed">
          I’m currently looking for an entry-level role where I can contribute
          to real projects, learn from experienced teammates, and grow through
          feedback, reviews, and hands-on delivery.
        </p>

        {/* Keep these minimal for now — we’ll formalize in the Skills section */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            "React",
            "JavaScript",
            "Responsive UI",
            "Component-based design",
            "Git workflow",
            "Testing basics",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
