import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <a href="/" className="logo icon">
        <span></span>
      </a>
      <div>
        <p>enalia</p>
        <p>hi</p>
      </div>
      <Menu items={["Projects", "About"]} />
    </header>
  );
}
