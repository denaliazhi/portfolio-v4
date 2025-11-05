export default function ProjectHero({
  title,
  desc,
  src,
  alt,
  type,
  tools,
  timeline,
}) {
  return (
    <>
      <h1>{title}</h1>
      <p>{desc}</p>
      <img src={src} alt={alt} />
      <div>
        <div>
          <h2>Type of work</h2>
          <p>{type}</p>
        </div>
        <div>
          <h2>Tools used</h2>
          <p>{tools}</p>
        </div>
        <div>
          <h2>Timeline</h2>
          <p>{timeline}</p>
        </div>
      </div>
    </>
  );
}
