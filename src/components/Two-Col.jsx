export default function TwoCol({
  ratio = [1, 1],
  col1,
  col2,
}) {
  return (
    <section class="two-col">
      <div style={{ flex: ratio[0] }}>{col1}</div>
      <div style={{ flex: ratio[1] }}>{col2}</div>
    </section>
  );
}
