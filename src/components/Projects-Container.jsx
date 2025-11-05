export default function ProjectsContainer({
  content,
}) {
  return (
    <section className="projects">
      <h2>Here's a sample of my work</h2>
      <div>
        {Object.values(content).map((project) => (
          <a
            href={`/${project.title.replace(
              " ",
              "-"
            )}`}
          >
            <article>
              <h3>{project.desc}</h3>
              <div>
                <img
                  src={project.src}
                  alt={project.alt}
                  height="250"
                  width="350"
                />
              </div>
              <ul>
                {project.tools.map((tool) => (
                  <li>{tool}</li>
                ))}
                <li>{project.type}</li>
              </ul>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
