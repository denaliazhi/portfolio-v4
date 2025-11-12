export default function ProjectsContainer({
  content,
}) {
  return (
    <section className="projects">
      <h2>Latest projects</h2>
      <div>
        {Object.values(content).map((project) => (
          <a
            href={`/${project.title.replaceAll(
              " ",
              "-"
            )}`}
          >
            <article>
              <h3>{project.desc_short}</h3>
              <div>
                <img
                  src={`/projects/${project.images_featured[0].src}`}
                  alt={
                    project.images_featured[0].alt
                  }
                  height="250"
                  width="350"
                />
              </div>
              <ul class="tags">
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
