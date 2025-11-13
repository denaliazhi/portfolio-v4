import { useState } from "react";

export default function Accordion({
  startOpen,
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
    <div className="accordion">
      <h4 className="accordion-header">
        <button
          onClick={handleClick}
          className={isOpen ? "open" : null}
        >
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
