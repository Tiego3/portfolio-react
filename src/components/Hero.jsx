import { useEffect, useRef } from "react";
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

function Hero3DCard({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (prefersReduced || isMobile) return;

    const el = ref.current;
    if (!el) return;

    const section = el.closest("section");

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(900px) rotateY(${dx * 3}deg) rotateX(${-dy * 3}deg)`;
    };

    const onMouseLeave = () => {
      el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
    };

    el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} style={{ willChange: "transform" }}>
      {children}
    </div>
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
        <Hero3DCard>
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
        </Hero3DCard>

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
