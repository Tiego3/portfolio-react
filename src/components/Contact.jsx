import { useState } from "react";

export default function Contact() {
  const email = "tiegomathobela@email.com"; 
  const github = "https://github.com/Tiego3";
  const linkedin = "https://www.linkedin.com/in/tiego-m/"; 

  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Could not copy email. Please copy it manually: " + email);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.target);
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus(''), 3000);
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Contact</h2>

        <p className="mt-2 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
          If you'd like to chat about a role, a project, or collaboration, feel
          free to reach out. I'm open to junior / entry-level opportunities.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
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
                type="button"
                className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
              >
                {copied ? "Copied" : "Copy email"}
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

          <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <h3 className="font-semibold">Send a message</h3>

            <form
              className="mt-5 space-y-3"
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <input
                className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-slate-700"
                placeholder="Your name"
                name="name"
                autoComplete="name"
                required
              />

              <input
                className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-slate-700"
                placeholder="Your email"
                type="email"
                name="email"
                autoComplete="email"
                required
              />

              <textarea
                className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-slate-700"
                placeholder="Your message"
                rows={4}
                name="message"
                required
              />

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send'}
              </button>

              {formStatus === 'success' && (
                <p className="text-sm text-green-600 dark:text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {formStatus === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}