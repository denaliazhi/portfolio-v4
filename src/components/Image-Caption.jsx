export default function ImageCaption({
  image,
  imageStyle = "scrapbook",
}) {
  return (
    <figure
      className={`image-caption ${imageStyle}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        height="200"
      />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
