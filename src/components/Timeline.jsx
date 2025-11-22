import { useRef } from "react";
import Accordion from "../components/Accordion";

export default function Timeline({ contents }) {
  const timelineRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    timelineRef.current
      .querySelector(
        `#${e.target.parentNode.parentNode.parentNode.id}`
      )
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    // const mouseX = e.clientX;
    // const mouseY = e.clientY;
    // const movableElement =
    //   timelineRef.current.querySelector(
    //     ".timeline-marker"
    //   );
    // const elementHeight =
    //   movableElement.offsetHeight;

    // movableElement.style.top =
    //   mouseY - 100 + "px";
    // movableElement.style.left = 0 + "px";
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
            onClick={handleClick}
            id={item.heading.replaceAll(" ", "-")}
          >
            <Accordion
              heading={item.heading}
              startOpen={item.open}
            >
              {item.body}
            </Accordion>
          </li>
        ))}
      </ul>
    </>
  );
}
