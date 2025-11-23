import { useState } from "react";
import { artifacts } from "../data/personal-artifacts";

export default function Artifacts() {
  const [selected, setSelected] =
    useState("headshot");

  const handleClick = (e) => {
    const name = e.target.nodeName;
    if (name === "IMG" || name === "FIGCAPTION") {
      setSelected(e.target.parentNode.id);
    } else if (name === "P") {
      setSelected(
        e.target.parentNode.parentNode.id
      );
    } else if (name === "FIGURE") {
      setSelected(e.target.id);
    }
  };

  return (
    <>
      <section
        id="artifacts"
        onClick={handleClick}
      >
        {Object.entries(artifacts).map(
          (artifact) => (
            <figure
              id={artifact[0]}
              key={artifact[0]}
            >
              <img
                src={artifact[1].img.src}
                alt={artifact[1].img.alt}
                width={artifact[1].img.width}
                height={artifact[1].img.height}
              />
              <figcaption
                className={
                  artifact[0] === "headshot"
                    ? "speech-bubble"
                    : null
                }
              >
                {artifact[0] === "headshot"
                  ? artifacts[selected].explainer
                  : artifact[1].caption}
              </figcaption>
            </figure>
          )
        )}
      </section>
    </>
  );
}
