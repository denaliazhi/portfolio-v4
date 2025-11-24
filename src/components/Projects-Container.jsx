import { useRef } from "react";
import ProjectCard from "./Project-Card";

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
              <ProjectCard
                project={{
                  image: {
                    src: `/projects/${project.images_featured[0].src}`,
                    alt: project
                      .images_featured[0].alt,
                  },
                  title: project.title,
                  desc: project.desc_short,
                  tags: [
                    ...project.type,
                    ...project.tools,
                  ],
                }}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
