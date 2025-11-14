import ImageCaption from "./Image-Caption";

export default function ProjectsContainer({
  heading,
  content,
}) {
  return (
    <section className="projects">
      <h2>{heading}</h2>
      <div>
        {Object.values(content).map((project) => (
          <a
            href={`/${project.title.replaceAll(
              " ",
              "-"
            )}`}
          >
            <ImageCaption
              image={{
                src: `/projects/${project.images_featured[0].src}`,
                alt: project.images_featured[0]
                  .alt,
                caption: project.desc_short,
              }}
            ></ImageCaption>
          </a>
        ))}
      </div>
    </section>
  );
}
