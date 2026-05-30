import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import useScrollReveal from "../hooks/useScrollReveal";
import { useCardTilt } from "../hooks/useParallax";

function ProjectCard({ project, delay }) {
  const revealRef = useScrollReveal();
  const tiltRef = useCardTilt(6);

  return (
    <div
      ref={revealRef}
      className="reveal project-card"
      style={{ "--delay": `${delay}ms` }}
    >
      <div ref={tiltRef} className="project-card__inner">
        {/* Gradient image area */}
        <div
          className="project-card__hero"
          style={{ "--accent": project.accent }}
          aria-hidden="true"
        >
          <div className="project-card__hero-grid" />
          {project.concept && (
            <span className="project-card__concept-badge">Concept</span>
          )}
        </div>

        {/* Content */}
        <div className="project-card__body">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>

          <div className="project-card__tags">
            {project.tech.map((t) => (
              <span key={t} className="project-card__tag">{t}</span>
            ))}
          </div>

          <div className="project-card__links">
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Live site
              </a>
            )}
            {project.repo !== "#" && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
              >
                <Github size={14} aria-hidden="true" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal();

  return (
    <section id="projects" className="container-x section-y">
      <div ref={headerRef} className="reveal mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Things I've built — and one thing I'm planning to.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
