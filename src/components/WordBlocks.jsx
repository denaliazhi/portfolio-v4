export default function WordBlocks({ content }) {
  return (
    <div className="word-blocks">
      {content.map((block) => (
        <p>{block}</p>
      ))}
    </div>
  );
}
