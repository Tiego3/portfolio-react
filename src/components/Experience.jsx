const experience = [
  {
    title: "Junior Software Developer",
    company: "NovaWorks Digital (Hypothetical)",
    location: "Johannesburg (Hybrid)",
    dates: "2025 — Present",
    summary:
      "Built and maintained UI components for internal tools and customer-facing features, with a focus on clarity, responsiveness, and reliable behavior.",
    highlights: [
      "Converted designs into reusable React components and improved consistency across pages.",
      "Collaborated with a developer to fix UI bugs and improve accessibility and keyboard navigation.",
      "Integrated simple API calls and handled loading and error states for a smoother user experience.",
      "Refactored repetitive UI into shared components to reduce duplication and improve maintainability.",
    ],
  },
  {
    title: "Software Tester (QA Intern)",
    company: "BrightLabs QA (Hypothetical)",
    location: "Remote",
    dates: "2024 — 2025",
    summary:
      "Supported testing and quality checks for web applications, helping identify issues early and improving release confidence.",
    highlights: [
      "Executed functional and regression test cases and reported issues with clear reproduction steps.",
      "Validated UI behavior across browsers and screen sizes to ensure a consistent experience.",
      "Worked closely with a developer to verify fixes and reduce recurring issues.",
      "Documented test results and helped keep test cases organized and updated.",
    ],
  },
  {
    title: "IT Support Assistant (Part-time)",
    company: "Campus Tech Desk (Hypothetical)",
    location: "On-site",
    dates: "2023 — 2024",
    summary:
      "Provided technical support and basic troubleshooting while developing strong communication and problem-solving habits.",
    highlights: [
      "Assisted users with basic troubleshooting and resolved routine issues efficiently.",
      "Improved documentation for common fixes to reduce repeated support requests.",
      "Supported device setup and software configuration for new users.",
      "Learned to communicate technical steps clearly to non-technical users.",
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
