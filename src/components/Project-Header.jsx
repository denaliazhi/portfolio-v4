export default function ProjectHeader({
  title,
  desc,
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
        {type.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>{desc}</p>
    </section>
  );
}
