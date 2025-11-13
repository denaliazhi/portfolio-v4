export default function OneCol({ id, children }) {
  return (
    <section
      id={id ? id : null}
      className="one-col"
    >
      {children}
    </section>
  );
}
