export default function ProjectHeader({
  title,
  desc_long,
  type,
  tools,
}) {
  return (
    <section>
      <h1>{title}</h1>
      <hr />
      <ul class="tags">
        {tools.map((tool) => (
          <li>{tool}</li>
        ))}
        <li>{type}</li>
      </ul>
      <p>{desc_long}</p>
    </section>
  );
}
