import { motion } from "motion/react";
import { Reveal } from "./Reveal";

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
    <motion.span
      className="skill-tag"
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 80, damping: 14, delay: delay / 1000 }}
    >
      {label}
    </motion.span>
  );
}

function SkillCluster({ category, baseDelay }) {
  return (
    <Reveal delay={baseDelay} className="skill-cluster">
      <div className="skill-cluster__header">
        <span className="skill-cluster__emoji" aria-hidden="true">{category.emoji}</span>
        <h3 className="skill-cluster__title">{category.title}</h3>
      </div>
      <div className="skill-cluster__tags">
        {category.items.map((item, i) => (
          <SkillTag key={item} label={item} delay={baseDelay + i * 40} />
        ))}
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-y">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Technical skills grounded in building, validating, and improving reliable software.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCluster key={cat.title} category={cat} baseDelay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
