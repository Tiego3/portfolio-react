import useScrollReveal from "../hooks/useScrollReveal";

const SKILL_CATEGORIES = [
  {
    title: "Development",
    emoji: "⌨️",
    items: ["C#", "ASP.NET", "JavaScript", "HTML & CSS", "SQL", "OOP", "Responsive Web"],
  },
  {
    title: "Testing & Quality",
    emoji: "🔍",
    items: [
      "Manual Testing",
      "Automated Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Defect Tracking",
      "Test Case Design",
    ],
  },
  {
    title: "Tools & Platforms",
    emoji: "🛠",
    items: ["Git & GitHub", "Visual Studio", "Jira", "Selenium", "HP UFT", "Jenkins"],
  },
  {
    title: "Methodologies",
    emoji: "♾️",
    items: ["Agile / Scrum", "SDLC", "Design Thinking", "CI/CD"],
  },
];

function SkillTag({ label, delay }) {
  return (
    <span
      className="skill-tag reveal-scale"
      style={{ "--delay": `${delay}ms` }}
    >
      {label}
    </span>
  );
}

function SkillCluster({ category, baseDelay }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal skill-cluster" style={{ "--delay": `${baseDelay}ms` }}>
      <div className="skill-cluster__header">
        <span className="skill-cluster__emoji" aria-hidden="true">{category.emoji}</span>
        <h3 className="skill-cluster__title">{category.title}</h3>
      </div>
      <div className="skill-cluster__tags">
        {category.items.map((item, i) => (
          <SkillTag key={item} label={item} delay={baseDelay + i * 40} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useScrollReveal();

  return (
    <section id="skills" className="section-y">
      <div className="container-x">
        <div ref={headerRef} className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Technical skills grounded in building, validating, and improving reliable software.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCluster key={cat.title} category={cat} baseDelay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
