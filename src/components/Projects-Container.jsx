export default function ProjectsContainer({
  content,
}) {
  return (
    <section className="projects">
      <h2>Read about my latest work</h2>
      <div>
        {Object.values(content).map((project) => (
          <a
            key={project.title}
            href={`/${project.title.replaceAll(
              " ",
              "-"
            )}`}
          >
            <figure
              className={"image-caption modern"}
            >
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
        ))}
      </div>
    </section>
  );
}
