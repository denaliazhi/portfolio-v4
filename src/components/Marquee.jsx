import { useState } from "react";

export default function Marquee() {
  const [play, setPlay] = useState(true);

  const [speed, setSpeed] = useState(-10);
  const DEFAULT_SPEED = 30; // in seconds
  const duration = `${DEFAULT_SPEED + speed}s`;
  console.log("Duration: ", duration);
  const handleChange = (e) => {
    setSpeed(Number(e.target.value));
  };
  const handleClick = () => {
    setPlay(!play);
  };

  const TEXT = `Welcome to my portfolio. Here on business?
          Visit the “Work” tab. Don't scroll down 
          or click around because you might get distracted. 
          You might even have fun.`;

  const textStyle = {
    animationDuration: duration,
    animationPlayState: play ? null : "paused",
  };

  let sliderStyle;
  switch (speed) {
    case -20:
      sliderStyle = {
        "--thumb-image": "url('/rabbit.png')",
        "--thumb-height": "35px",
        "--thumb-color": "transparent",
        "--thumb-outline": "none",
      };
      break;
    case 20:
      sliderStyle = {
        "--thumb-image": "url('/turtle.png')",
        "--thumb-height": "35px",
        "--thumb-color": "transparent",
        "--thumb-outline": "none",
      };
      break;
    default:
      sliderStyle = {
        "--thumb-image": "none",
        "--thumb-height": "12px",
        "--thumb-color": "var(--main)",
        "--thumb-outline":
          "5px solid var(--background)",
      };
      break;
  }

  return (
    <section className="marquee">
      <div
        className="marquee-text"
        role="marquee"
      >
        <p style={textStyle}>{TEXT}</p>
        <p aria-hidden="true" style={textStyle}>
          {TEXT}
        </p>
      </div>

      <div id="marquee-controller">
        <label htmlFor="marquee-speed">
          Speed
        </label>
        <input
          id="marquee-speed"
          type="range"
          min="-20"
          max="20"
          step="10"
          onChange={handleChange}
          value={speed}
          style={sliderStyle}
        />
        <button
          onClick={handleClick}
          style={{
            backgroundImage: play
              ? "url('/pause.png')"
              : "url('/play.png')",
          }}
          aria-label={
            play
              ? "Pause marquee"
              : "Play marquee"
          }
        ></button>
      </div>
    </section>
  );
}
