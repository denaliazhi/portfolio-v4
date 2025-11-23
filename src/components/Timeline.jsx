import { useRef, useState } from "react";
import Accordion from "../components/Accordion";

export default function Timeline({ contents }) {
  const timelineRef = useRef();
  const [showAll, setShowAll] = useState(false);

  const handleScroll = (e) => {
    console.log(e.target);
    if (e.target.nodeName === "A") return;
    e.preventDefault();
    timelineRef.current
      .querySelector(
        `#${e.target.parentNode.parentNode.parentNode.id}`
      )
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="timeline-marker icon"></div>
      <ul
        className="timeline-content"
        ref={timelineRef}
      >
        {contents.map((item) => (
          <li
            key={item.heading.replaceAll(
              " ",
              "-"
            )}
            onClick={handleScroll}
            id={item.heading.replaceAll(" ", "-")}
          >
            <Accordion
              heading={item.heading}
              startOpen={item.open || showAll}
            >
              {item.body}
            </Accordion>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={handleShowAll}
      >
        {showAll ? "Collapse all" : "Show all"}
      </button>
    </>
  );
}
