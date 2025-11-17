export default function TwoCol({
  id,
  ratio = [1, 1],
  col1,
  col2,
}) {
  return (
    <section
      className="two-col"
      id={id ? id : null}
    >
      <div style={{ flex: ratio[0] }}>{col1}</div>
      <div style={{ flex: ratio[1] }}>{col2}</div>
    </section>
  );
}
