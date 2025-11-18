import { useState, useEffect } from "react";

export default function HeaderNav({ items }) {
  const [isOpen, setIsOpen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth
  );
  const BREAKPOINT = 600;

  useEffect(() => {
    if (screenWidth < BREAKPOINT) {
      // Collapse menu if screen-width changes to below breakpoint
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener(
      "resize",
      handleResize
    );
    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [screenWidth]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button
        className={
          isOpen ? "nav-icon x-mark" : "nav-icon"
        }
        aria-label={
          isOpen ? "Close menu" : "Open menu"
        }
        onClick={handleClick}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      {isOpen && (
        <li className="nav-items">
          {items.map((item) => (
            <ul key={item} className="tags">
              <a href={`/${item.toLowerCase()}`}>
                <li>{item}</li>
              </a>
            </ul>
          ))}
        </li>
      )}
    </nav>
  );
}
