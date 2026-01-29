export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold">About</h2>

      <div className="mt-6 grid gap-10 md:grid-cols-3">
        {/* Left: Short summary */}
        <div className="md:col-span-2">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            I’m a junior developer focused on building clean, responsive web
            interfaces. I enjoy turning ideas into simple, usable products and I
            care about good structure, clear UI, and maintainable code.
          </p>

          <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
            I’m currently looking for an entry-level role where I can contribute
            to real projects, grow with a team, and keep improving my skills
            through feedback and hands-on work.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Tailwind",
              "Git",
              "Testing basics",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Highlights */}
        <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
          <h3 className="font-semibold">What I bring</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="leading-relaxed">
              ✅ I build layouts that work well on mobile and desktop.
            </li>
            <li className="leading-relaxed">
              ✅ I write readable code and break UI into reusable components.
            </li>
            <li className="leading-relaxed">
              ✅ I’m comfortable learning quickly and asking the right questions.
            </li>
            <li className="leading-relaxed">
              ✅ I value clear communication and consistent progress.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
