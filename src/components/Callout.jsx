export default function Callout({
  icon,
  content,
}) {
  return (
    <section className="callout">
      <div
        className="icon"
        style={{
          backgroundImage: `url('${icon}')`,
        }}
      ></div>
      {content && (
        <div className="callout-content">
          {content.heading && (
            <h3>{content.heading}</h3>
          )}
          {content.body &&
            content.body.map((paragraph) => (
              // TO DO: change key
              <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
      )}
    </section>
  );
}
