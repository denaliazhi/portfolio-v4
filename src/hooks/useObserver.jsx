import { useEffect, useRef } from "react";

// NON-FUNCTIONAL HOOK- revisit later
export default function useIntersectionObserver(
  setActiveId
) {
  // Utilize Intersection Observer API to determine active section
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(
            "intersecting...",
            entry.target.id
          );
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
      callback
    );
    const articleSections =
      articleRef.current.querySelectorAll(
        "h2, h3"
      );
    articleSections.forEach((section) =>
      observer.observe(section)
    );

    return observer.disconnect();
  }, [
    articleRef,
    setActiveSection,
    activeSection,
  ]);
}
