import { projects } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";


function ProjectCard({ project }) {
  return (
    <div className="card card-hover p-5">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs dark:border-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 text-sm">
        <a
          className="inline-flex items-center gap-1.5 underline underline-offset-4 decoration-transparent transition hover:decoration-current hover:opacity-80"
          href={project.live}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={16} className="opacity-80" aria-hidden="true" />
          Live
        </a>

        <a
          className="inline-flex items-center gap-1.5 underline underline-offset-4 decoration-transparent transition hover:decoration-current hover:opacity-80"
          href={project.repo}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={16} className="opacity-80" aria-hidden="true" />
          Repo
        </a>
      </div>

    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold">Projects</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        A few things I’ve built recently.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
