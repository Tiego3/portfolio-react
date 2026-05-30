import { Moon, Sun, Github } from "lucide-react";
import useTheme from "../hooks/useTheme";
import useActiveSection from "../hooks/useActiveSection";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const sections = ["top", "experience", "skills", "projects", "about", "contact"];
  const activeId = useActiveSection(sections);

  const navLinkClass = (id) =>
    "nav-link " +
    (activeId === id ? "nav-link--active" : "");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Brand + Open to Work */}
        <a href="#top" className="flex items-center gap-2.5 font-semibold">
          Tiego Mathobela
          <span className="open-to-work" title="Open to work">
            <span className="open-to-work__dot" aria-hidden="true" />
            <span className="open-to-work__label">Open to work</span>
          </span>
        </a>

        <nav className="hidden gap-1 text-sm md:flex items-center">
          <a href="#experience" className={navLinkClass("experience")}>Experience</a>
          <a href="#skills" className={navLinkClass("skills")}>Skills</a>
          <a href="#projects" className={navLinkClass("projects")}>Projects</a>
          <a href="#about" className={navLinkClass("about")}>About</a>
          <a href="#contact" className={navLinkClass("contact")}>Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* GitHub link */}
          <a
            href="https://github.com/Tiego3"
            target="_blank"
            rel="noreferrer"
            className="nav-icon-btn"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <Github size={18} aria-hidden="true" />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="nav-icon-btn"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
