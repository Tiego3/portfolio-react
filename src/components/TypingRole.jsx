import { useEffect, useMemo, useState } from "react";

const DEFAULT_ROLES = [
  "Software Developer",
  "Software Tester",
  "Aspiring Data Scientist",
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);

    onChange();
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function TypingRole({
  roles = DEFAULT_ROLES,
  className = "",
  typeSpeed = 55,
  eraseSpeed = 35,
  pauseMs = 1100,
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const safeRoles = useMemo(
    () => (Array.isArray(roles) && roles.length ? roles : DEFAULT_ROLES),
    [roles]
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const current = safeRoles[roleIndex];
    let timeoutId;

    // Typing
    if (!isErasing && text.length < current.length) {
      timeoutId = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeoutId);
    }

    // Pause after typing full word
    if (!isErasing && text.length === current.length) {
      timeoutId = setTimeout(() => setIsErasing(true), pauseMs);
      return () => clearTimeout(timeoutId);
    }

    // Erasing
    if (isErasing && text.length > 0) {
      timeoutId = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, eraseSpeed);
      return () => clearTimeout(timeoutId);
    }

    // Move to next role
    if (isErasing && text.length === 0) {
      setIsErasing(false);
      setRoleIndex((i) => (i + 1) % safeRoles.length);
    }
  }, [
    text,
    isErasing,
    roleIndex,
    safeRoles,
    typeSpeed,
    eraseSpeed,
    pauseMs,
    prefersReducedMotion,
  ]);

  // Reduced motion: show a stable role (no animation)
  const displayText = prefersReducedMotion ? safeRoles[0] : text;

  return (
    <span className={className}>
      {displayText}
      {/* Cursor (subtle). Hide it for reduced motion to keep it calm. */}
      {!prefersReducedMotion && (
        <span aria-hidden="true" className="ml-0.5 align-baseline opacity-60">
          |
        </span>
      )}
    </span>
  );
}
