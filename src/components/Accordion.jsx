import { useState } from "react";

export default function Accordion({
  startOpen = false,
  heading,
  children,
}) {
  const [isOpen, setOpen] = useState(
    Boolean(startOpen)
  );
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className={`accordion ${
        isOpen ? "open" : ""
      }`}
    >
      <h4 className="accordion-header">
        <button onClick={handleClick}>
          {heading}
        </button>
      </h4>
      {isOpen && (
        <div className="accordion-body">
          {children}
        </div>
      )}
    </div>
  );
}
