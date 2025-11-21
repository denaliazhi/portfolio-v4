import { useRef } from "react";

export default function ProjectsContainer({
  content,
}) {
  const projectsRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="projects">
      <a
        href="#latest-projects"
        onClick={handleClick}
      >
        <h2>Read about my latest work</h2>
      </a>
      <div id="latest-projects" ref={projectsRef}>
        {Object.values(content).map((project) => {
          return (
            <a
              className={
                project.title === "Orbitl"
                  ? "wip"
                  : null
              }
              key={project.title}
              href={
                project.title === "Orbitl"
                  ? null
                  : `/${project.title.replaceAll(
                      " ",
                      "-"
                    )}`
              }
            >
              <figure className="image-caption modern">
                <img
                  src={`/projects/${project.images_featured[0].src}`}
                  alt={
                    project.images_featured[0].alt
                  }
                />
                <figcaption>
                  <h3>{project.title}</h3>
                  <p>{project.desc_short}</p>
                  <ul className="tags">
                    <li>{project.type}</li>
                    {project.tools.map((tool) => (
                      <li
                        key={`${project.title}-${tool}`}
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            </a>
          );
        })}
      </div>
    </section>
  );
}
