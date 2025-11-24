export default function ProjectCard({ project }) {
  return (
    <figure className="image-caption modern">
      <img
        src={project.image.src}
        alt={project.image.alt}
        width={project.width || "305"}
        height={project.height || "210"}
      />
      <figcaption>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        {project.tags && (
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={`${project.title}-${tag}`}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </figcaption>
    </figure>
  );
}
