export default function Callout({
  icon,
  content,
}) {
  return (
    <section class="callout">
      <div
        className="icon"
        style={{
          backgroundImage: `url('/icons/${icon}.png')`,
        }}
      ></div>
      <div className="callout-content">
        {content.heading && (
          <h3>{content.heading}</h3>
        )}
        {content.body &&
          content.body.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
      </div>
    </section>
  );
}
