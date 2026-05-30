import { useEffect, useRef } from "react";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Parallax scroll effect.
 * Moves the element at `speed` fraction of scroll offset.
 * speed=0.2 → element shifts 20px per 100px scroll.
 */
export function useParallaxScroll(speed = 0.2) {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const el = ref.current;
    if (!el) return;

    let rafId;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY * speed;
        el.style.transform = `translateY(${y}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return ref;
}

/**
 * 3D tilt effect on mouse move within the element's bounds.
 * maxTilt: max degrees of rotation (default 8).
 */
export function useCardTilt(maxTilt = 8) {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(600px) rotateY(${dx * maxTilt}deg) rotateX(${-dy * maxTilt}deg) translateY(-4px)`;
    };

    const onMouseLeave = () => {
      el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) translateY(0px)";
    };

    el.style.transition = "transform 0.15s ease-out";
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [maxTilt]);

  return ref;
}
