import { useEffect, useRef } from "react";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Magnetic button: on mouse hover the element follows the cursor slightly.
 * @param {number} strength - how far (px) it can shift (default 6)
 */
export default function useMagneticButton(strength = 6) {
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
      const dx = ((e.clientX - cx) / (rect.width / 2)) * strength;
      const dy = ((e.clientY - cy) / (rect.height / 2)) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const onMouseLeave = () => {
      el.style.transform = "translate(0px, 0px)";
    };

    el.style.transition = "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)";
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [strength]);

  return ref;
}
