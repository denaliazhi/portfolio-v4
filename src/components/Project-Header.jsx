export default function ProjectHeader({
  title,
  date = false,
  desc,
  type,
  tools,
}) {
  return (
    <section className="project-header">
      <div>
        <h1>{title}</h1>
        {date && <p>{date}</p>}
      </div>
      <hr />
      <ul className="tags">
        {tools.map((tool) => (
          <li key={`${title} - ${tool}`}>
            {tool}
          </li>
        ))}
        {type.map((item) => (
          <li key={`${title} - ${item}`}>
            {item}
          </li>
        ))}
      </ul>
      <p>{desc}</p>
    </section>
  );
}
