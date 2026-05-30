const SKILL_CATEGORIES = [
  {
    title: "Software Development",
    items: [
      "C#",
      "ASP.NET",
      "JavaScript",
      "HTML & CSS",
      "SQL",
      "Object-Oriented Programming (OOP)",
      "Responsive Web Development",
    ],
  },
  {
    title: "Software Testing & Quality",
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
    items: [
      "Git & GitHub",
      "Visual Studio",
      "Jira",     
    ],
  },
  {
    title: "Methodologies",
    items: [
      "Agile / Scrum",
      "SDLC",
      "Design Thinking",
     
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
            Technical skills grounded in building, validating, and improving reliable software solutions.
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
