export default function ButtonBar({
  label = false,
  children,
}) {
  return (
    <div className="button-bar">
      {label && <p>{label}</p>}
      {children}
    </div>
  );
}
