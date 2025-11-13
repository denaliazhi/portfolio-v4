export default function TwoCol({
  children,
  images,
}) {
  return (
    <section class="two-col">
      <div>{children}</div>
      <div>
        {images.map((image) => (
          <figure>
            <img
              src={`/projects/${image.src}`}
              alt={image.alt}
            />
            <figcaption>
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
