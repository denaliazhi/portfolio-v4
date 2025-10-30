import { useState, useEffect } from "react";

export default function Menu({ items }) {
  const [isOpen, setIsOpen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const BREAKPOINT = 768;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (screenWidth < BREAKPOINT) {
        // Collapse menu if screen-width changes
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const handleClick = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <nav>
      <div
        className={isOpen ? "nav-icon x-mark" : "nav-icon"}
        aria-label="Show the menu"
        onClick={handleClick}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isOpen && (
        <li className="nav-items">
          {items.map((item) => (
            <ul key={item}>
              <a href={`/${item.toLowerCase()}`}>
                <p>{item}</p>
              </a>
            </ul>
          ))}
        </li>
      )}
    </nav>
  );
}
