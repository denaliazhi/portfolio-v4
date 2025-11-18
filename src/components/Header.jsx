import HeaderNav from "./Header-Nav";

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
      <HeaderNav items={["About"]} />
    </header>
  );
}
