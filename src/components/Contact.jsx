import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const EMAIL = "tiegomathobela@email.com";
const GITHUB = "https://github.com/Tiego3";
const LINKEDIN = "https://www.linkedin.com/in/tiego-m/";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Please copy manually: " + EMAIL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    const formData = new FormData(e.target);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setFormStatus("success");
      e.target.reset();
      setTimeout(() => setFormStatus(""), 4000);
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="container-x section-y">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Open to roles, collaborations, or just a conversation.
        </p>
      </Reveal>

      <div className="mt-10 mx-auto max-w-3xl grid gap-6 md:grid-cols-2">
        {/* Links panel */}
        <Reveal delay={80} className="contact-panel">
          <h3 className="text-sm font-semibold tracking-tight">Reach out directly</h3>

          <a href={`mailto:${EMAIL}`} className="contact-link mt-5">
            <span className="contact-link__icon"><Mail size={16} aria-hidden="true" /></span>
            <span className="contact-link__label">Email me</span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="contact-link mt-2"
          >
            <span className="contact-link__icon">
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            </span>
            <span className="contact-link__label">
              {copied ? "Copied to clipboard" : "Copy email address"}
            </span>
          </button>

          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-500 mb-3 uppercase tracking-widest">Find me on</p>
            <div className="flex gap-3">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                aria-label="GitHub"
              >
                <Github size={18} aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Form panel */}
        <Reveal delay={160} className="contact-panel">
          <h3 className="text-sm font-semibold tracking-tight">Send a message</h3>

          {formStatus === "success" ? (
            <div className="contact-success">
              <div className="contact-success__icon" aria-hidden="true">
                <Check size={24} strokeWidth={2.5} />
              </div>
              <p className="contact-success__text">Message sent — I'll get back to you soon.</p>
            </div>
          ) : (
            <form
              className="mt-5 space-y-3"
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill: <input name="bot-field" /></label>
              </p>

              <input
                className="contact-input"
                placeholder="Your name"
                name="name"
                autoComplete="name"
                required
              />
              <input
                className="contact-input"
                placeholder="Your email"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
              <textarea
                className="contact-input"
                placeholder="Your message"
                rows={4}
                name="message"
                required
              />

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="contact-submit"
              >
                {formStatus === "sending" ? "Sending…" : "Send message"}
              </button>

              {formStatus === "error" && (
                <p className="text-xs text-red-500 dark:text-red-400">
                  Something went wrong — email me directly instead.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
