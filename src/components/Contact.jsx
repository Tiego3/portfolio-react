import { useState } from "react";

export default function Contact() {
  const email = "yourname@email.com"; // <-- change this
  const github = "https://github.com/yourusername"; // <-- change this
  const linkedin = "https://www.linkedin.com/in/yourusername/"; // <-- change this

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Could not copy email. Please copy it manually: " + email);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold">Contact</h2>

      <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
        If you’d like to chat about a role, a project, or collaboration, feel
        free to reach out. I’m open to junior / entry-level opportunities.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Left: Contact buttons */}
        <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
          <h3 className="font-semibold">Quick links</h3>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href={`mailto:${email}`}
              className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:opacity-90 dark:bg-slate-100 dark:text-slate-900"
            >
              Email me
            </a>

            <button
              onClick={copyEmail}
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
            >
              {copied ? "Copied ✅" : "Copy email"}
            </button>

            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                GitHub
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right: Optional form explanation */}
        <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
          <h3 className="font-semibold">Message</h3>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            For a beginner-friendly portfolio, it’s completely fine to use the
            buttons on the left. If you later want a working contact form
            without a backend, use Netlify Forms or Formspree.
          </p>

          <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <p className="font-medium">Tip:</p>
            <p className="mt-1">
              Make sure your GitHub profile has pinned projects and good README
              files — recruiters click that first.
            </p>
          </div>

          {/* Optional Form (Only if you want it)
          <form className="mt-6 space-y-3">
            <input
              className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-700"
              placeholder="Your name"
            />
            <input
              className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-700"
              placeholder="Your email"
              type="email"
            />
            <textarea
              className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-700"
              placeholder="Your message"
              rows={4}
            />
            <button className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white dark:bg-slate-100 dark:text-slate-900">
              Send
            </button>
          </form>
          */}
        </div>
      </div>
    </section>
  );
}
