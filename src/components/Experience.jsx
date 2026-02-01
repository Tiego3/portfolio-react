const experience = [
  {
    title: "Experience Lab Learner",
    company: "Umuzi",
    location: "Remote",
    dates: "Jul 2025 — Dec 2025",
    summary:
      "Participate in a structured programme focused on professional readiness, applied technical skills, and career acceleration within a real-world work context.",
    highlights: [
      "Built professional and digital capabilities across areas including Design Thinking, responsible use of AI tools, financial literacy, and career readiness.",
      "Participate in design thinking activities such as user research, problem framing, and prototyping using tools like Figma.",
      "Perform data cleaning, basic analysis, and insight generation on real datasets.",
      "Collaborate in team-based environments, presenting work clearly.",
    ],
  },
  {
    title: "Software Quality Assurance Tester",
    company: "Inspired Testing",
    location: "Cape Town",
    dates: "Mar 2019 – Feb 2020",
    summary:
      "Validated functionality, accessibility, and reliability of web, desktop, and mobile applications while working closely with Agile delivery teams to support production-ready releases.",
    highlights: [
      "Designed and executed manual and automated test cases across web, desktop, and mobile applications, aligned with functional and accessibility requirements (WCAG).",
      "Contributed to automated regression testing using Selenium and HP UFT, supporting continuous integration workflows.",
      "Worked closely with developers, business analysts, and stakeholders in Agile teams to validate features and resolve defects.",
      "Logged, tracked, and reported defects in Jira, providing clear reproduction steps and impact details.",
      "Performed cross-browser, cross-device, and exploratory testing to ensure consistent behaviour and usability.",
    ],
  },
  {
    title: "Software Quality Assurance Tester",
    company: "Dynamic Visual Technologies",
    location: "Cape Town",
    dates: "Jul 2015 – Feb 2019",
    summary:
      "Developed and maintained automated test suites to improve test coverage, reduce regression risk, and support stable software delivery",
    highlights: [
      "Built and executed automated test scripts for web and desktop applications using Selenium and HP UFT.",
      "Supported regression testing efforts to maintain application stability after code changes.",
      "Integrated automated test suites into Jenkins pipelines to support continuous integration and reporting.",
      "Participated in Agile ceremonies including sprint planning, daily stand-ups, reviews, and retrospectives.",
      "Collaborated with cross-functional teams to identify risks, troubleshoot issues, and improve test coverage.",
    ],
  },
];

function ExperienceCard({ item }) {
  return (
    <div className="relative pl-10">
      {/* Timeline marker */}
      <div className="absolute left-0 top-4">
        <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_0_6px_rgba(124,124,248,0.12)]" />
      </div>

      <div className="card card-hover text-left">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-base font-semibold md:text-lg">
              {item.title} <span className="muted">· {item.company}</span>
            </h3>

            <p className="mt-1 text-sm muted">{item.location}</p>
          </div>

          <p className="text-sm muted md:text-right">{item.dates}</p>
        </div>

        <p className="mt-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {item.summary}
        </p>

        <ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {item.highlights.map((h) => (
            <li key={h} className="leading-relaxed">
              <span className="mr-2 text-accent">•</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="container-x section-y">
      {/* Centered section header/intro */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Experience</h2>

        <p className="mt-3 text-slate-700 dark:text-slate-300">
          A snapshot of responsibilities, outcomes, and collaboration.
        </p>

        <p className="mt-2 text-sm muted">
          Roles are placeholders and can be updated.
        </p>
      </div>

      {/* Timeline remains readable */}
      <div className="relative mx-auto mt-10 max-w-4xl">
        <div className="absolute left-[5px] top-0 h-full w-px bg-slate-200 dark:bg-slate-800" />

        <div className="space-y-8">
          {experience.map((item) => (
            <ExperienceCard key={`${item.title}-${item.company}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
