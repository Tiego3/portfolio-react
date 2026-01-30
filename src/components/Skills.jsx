const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    items: [
      "React (Vite)",
      "Tailwind CSS",
      "Responsive UI",
      "Component architecture",
      "Semantic HTML",
    ],
  },
  {
    title: "Testing / QA",
    items: [
      "Test case design",
      "Manual testing",
      "Regression testing",
      "Accessibility checks",
      "Test automation basics",
    ],
  },
  {
    title: "Tools / Workflow",
    items: [
      "Git & GitHub",
      "Netlify CI/CD",
      "Debugging & devtools",
      "REST APIs (basic)",
      "Agile collaboration",
    ],
  },
];

function SkillsCard({ title, items }) {
  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>

      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span
              aria-hidden="true"
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-y">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            A practical toolkit focused on building clean UI, shipping reliably, and
            supporting quality through testing.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat) => (
            <SkillsCard key={cat.title} title={cat.title} items={cat.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
