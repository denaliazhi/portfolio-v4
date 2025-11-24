import { useState } from "react";

export default function ProjectNav({
  sections,
  articleRef,
}) {
  const [showNav, setShowNav] = useState(
    window.innerWidth > 1000
  );

  const [activeSection, setActiveSection] =
    useState(null);
  if (activeSection) {
    // Update URL hash based on active section of article
    history.pushState(
      null,
      "",
      "#" + activeSection
    );
  }

  // Update active section if nav clicked
  function handleClick(e) {
    e.preventDefault();
    const identifier = e.target.id.replace(
      "-anchor",
      ""
    );
    const sectionNode =
      articleRef.current.querySelector(
        `#${identifier}`
      );
    sectionNode.scrollIntoView({
      behavior: "smooth",
    });
    setActiveSection(identifier);
  }

  // Create id for anchor link based on section name
  function createAnchor(name) {
    return name.split(" ").at(-1).toLowerCase();
  }

  // Toggle table of contents on mobile
  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div
        class="project-nav-icon"
        onClick={handleNav}
      >
        {showNav ? "Close" : "Table of contents"}
      </div>
      {showNav && (
        <nav className="project-nav">
          <h2>Table of contents</h2>
          <ul>
            {sections.map((heading) => {
              let anchorLink;
              // Section has subheadings
              if (Array.isArray(heading)) {
                anchorLink = createAnchor(
                  heading[0]
                );
                return (
                  <li
                    key={anchorLink}
                    className={
                      anchorLink === activeSection
                        ? "selected-anchor"
                        : null
                    }
                  >
                    <a
                      href={`#${anchorLink}`}
                      id={`${anchorLink}-anchor`}
                      onClick={handleClick}
                    >
                      {heading[0]}
                    </a>
                    {/* Nest subheadings under heading */}
                    <ul>
                      {heading[1].map(
                        (subheading) => {
                          const subLink =
                            createAnchor(
                              subheading
                            );
                          return (
                            <a
                              key={subLink}
                              href={`#${subLink}`}
                              onClick={
                                handleClick
                              }
                            >
                              <li
                                className={
                                  subLink ===
                                  activeSection
                                    ? "selected-anchor"
                                    : null
                                }
                                id={`${subLink}-anchor`}
                              >
                                {subheading}
                              </li>
                            </a>
                          );
                        }
                      )}
                    </ul>
                  </li>
                );
                // Section doesn't have subheadings
              } else {
                anchorLink =
                  createAnchor(heading);
                return (
                  <a
                    key={anchorLink}
                    href={`#${anchorLink}`}
                  >
                    <li
                      className={
                        anchorLink ===
                        activeSection
                          ? "selected-anchor"
                          : null
                      }
                      id={`${anchorLink}-anchor`}
                      onClick={handleClick}
                    >
                      {heading}
                    </li>
                  </a>
                );
              }
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
