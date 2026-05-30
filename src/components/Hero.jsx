import TypingRole from "./TypingRole";
import useScrollReveal from "../hooks/useScrollReveal";
import { useParallaxScroll } from "../hooks/useParallax";
import useMagneticButton from "../hooks/useMagneticButton";

function MagneticBtn({ href, className, children, target, rel }) {
  const ref = useMagneticButton(5);
  if (href) {
    return (
      <a ref={ref} href={href} className={className} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} className={className}>
      {children}
    </button>
  );
}

export default function Hero() {
  const revealRef = useScrollReveal({ threshold: 0.05, rootMargin: "0px" });
  const parallaxRef = useParallaxScroll(0.15);

  return (
    <section id="top" className="container-x section-y relative overflow-hidden">
      {/* Parallax decorative orb */}
      <div
        ref={parallaxRef}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[80px]"
      />

      <div ref={revealRef} className="reveal relative mx-auto max-w-3xl text-center">
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I'm <span className="text-accent">Tiego Mathobela</span>.
        </h1>

        <p className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-200">
          <TypingRole />
        </p>

        <p className="mt-6 text-lg text-slate-700 dark:text-slate-300">
          Software developer with a quality and testing background.
          Open to opportunities where I can contribute to building impactful projects.
        </p>

        <div className="mt-5 flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <MagneticBtn href="#projects" className="btn btn-accent">
              View Projects
            </MagneticBtn>
            <MagneticBtn href="#contact" className="btn btn-ghost">
              Contact
            </MagneticBtn>
          </div>
          <MagneticBtn
            href="/resume.pdf"
            className="btn btn-accent"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </MagneticBtn>
        </div>
      </div>
    </section>
  );
}
