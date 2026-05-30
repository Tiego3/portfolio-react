import { useEffect, useRef } from "react";
import TypingRole from "./TypingRole";
import { Reveal } from "./Reveal";
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

function VantaBg() {
  const ref = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const isDark = () => document.documentElement.classList.contains("dark");

    const init = async () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
      if (!ref.current) return;
      const [THREE, { default: NET }] = await Promise.all([
        import("three"),
        import("vanta/dist/vanta.net.min"),
      ]);
      if (!ref.current) return;
      effectRef.current = NET({
        el: ref.current,
        THREE,
        color: 0x7c7cf8,
        backgroundColor: isDark() ? 0x020617 : 0xf8fafc,
        points: 10.0,
        maxDistance: 26.0,
        spacing: 16.0,
        showDots: true,
      });
    };

    init();

    // Re-init when dark/light class toggles
    const observer = new MutationObserver(init);
    observer.observe(document.documentElement, { attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 -z-10 opacity-95 dark:opacity-80"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  const parallaxRef = useParallaxScroll(0.15);

  return (
    <section id="top" className="container-x section-y relative overflow-hidden">
      <VantaBg />

      {/* Parallax decorative orb — sits on top of Vanta */}
      <div
        ref={parallaxRef}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[80px]"
      />

      <Reveal
        className="relative mx-auto max-w-3xl text-center"
        margin="0px"
        amount={0.05}
      >
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
      </Reveal>
    </section>
  );
}
