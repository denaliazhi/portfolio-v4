import { useState } from "react";

export default function ProjectNav({
  anchorBase,
  sections,
}) {
  const [selected, setSelected] = useState();

  console.log(selected);
  function handleClick(e) {
    const identifier = e.target.id.replace(
      "-anchor",
      ""
    );
    setSelected(identifier);
  }

  function createAnchor(name) {
    return `${anchorBase}-${name
      .split(" ")
      .at(-1)
      .toLowerCase()}`;
  }
  return (
    <nav className="project-nav">
      <h2>Table of contents</h2>
      <ul>
        {sections.map((heading) => {
          let anchorLink;
          if (Array.isArray(heading)) {
            anchorLink = createAnchor(heading[0]);
            return (
              <li
                className={
                  anchorLink === selected
                    ? "selected-anchor"
                    : null
                }
                id={`${anchorLink}-anchor`}
                onClick={handleClick}
              >
                <a
                  key={anchorLink}
                  href={`#${anchorLink}`}
                >
                  {heading[0]}
                </a>
                <ul>
                  {heading[1].map(
                    (subheading) => {
                      const subLink =
                        createAnchor(subheading);
                      return (
                        <a
                          href={`#${subLink}`}
                          onClick={handleClick}
                        >
                          <li
                            className={
                              anchorLink ===
                              selected
                                ? "selected-anchor"
                                : null
                            }
                            id={`${subLink}-anchor`}
                            key={subLink}
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
          } else {
            anchorLink = createAnchor(heading);
            console.log(anchorLink);
            return (
              <a
                key={anchorLink}
                href={`#${anchorLink}`}
              >
                <li
                  className={
                    anchorLink === selected
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
  );
}
