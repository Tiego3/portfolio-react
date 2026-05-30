import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";
import useActiveSection from "../hooks/useActiveSection";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const sections = ["top", "experience", "skills", "projects", "about", "contact"];
  const activeId = useActiveSection(sections);

  const navLinkClass = (id) =>
    "rounded-xl px-3 py-1 transition outline-none focus-visible:ring-2 focus-visible:ring-accent-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 " +
    (activeId === id
      ? "bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100"
      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 " +
        "underline underline-offset-4 decoration-transparent hover:decoration-current");


  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-semibold">
          Tiego Mathobela
        </a>

        <nav className="hidden gap-2 text-sm md:flex">
          <a href="#experience" className={navLinkClass("experience")}>
            Experience
          </a>
          <a href="#skills" className={navLinkClass("skills")}>
            Skills
          </a>
          <a href="#projects" className={navLinkClass("projects")}>
            Projects
          </a>
          <a href="#about" className={navLinkClass("about")}>
            About
          </a>
          <a href="#contact" className={navLinkClass("contact")}>
            Contact
          </a>
        </nav>

        <button
          onClick={toggleTheme}
          className="rounded-xl border border-slate-200 p-2 transition outline-none hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-accent-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-800 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-950"
        >
          <span className="sr-only">
            {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          </span>

          {theme === "dark" ? (
            <Sun size={18} aria-hidden="true" />
          ) : (
            <Moon size={18} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
