import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    if (!sectionIds.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const intersecting = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersecting.set(entry.target.id, entry.isIntersecting);
        });

        // Pick the first section (in order) that is currently intersecting
        const nextActive =
          sectionIds.find((id) => intersecting.get(id)) || activeId;

        if (nextActive && nextActive !== activeId) setActiveId(nextActive);
      },
      {
        // treat section as active when its top crosses under the sticky header area
        root: null,
        threshold: 0.01,
        rootMargin: "-96px 0px -70% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds]);

  return activeId;
}
