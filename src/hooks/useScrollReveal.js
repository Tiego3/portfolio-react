import { useEffect, useRef } from "react";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, adds the "revealed" class.
 * CSS handles the actual animation via the .reveal / .revealed pair.
 *
 * @param {object} options
 * @param {number} [options.threshold=0.12]
 * @param {string} [options.rootMargin="-64px 0px -8% 0px"]
 * @param {boolean} [options.once=true] - only trigger once
 */
export default function useScrollReveal({
  threshold = 0.12,
  rootMargin = "-64px 0px -8% 0px",
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) {
      el?.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("revealed");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
