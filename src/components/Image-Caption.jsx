export default function ImageCaption({
  image,
  imageStyle = "scrapbook",
  dimensions = {
    height: 200,
    width: "auto",
  },
}) {
  return (
    <figure
      className={`image-caption ${imageStyle}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        height={dimensions.height}
        width={dimensions.width}
      />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
