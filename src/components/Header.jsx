import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <span className="logo icon"></span>
      <div>
        <p>enalia</p>
        <p>hi</p>
      </div>
      <Menu items={["Work", "Play", "About"]} />
    </header>
  );
}
