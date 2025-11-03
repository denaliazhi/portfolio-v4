import { useState } from "react";

export default function Marquee() {
  const [play, setPlay] = useState(true);

  const [speed, setSpeed] = useState(10);
  const DEFAULT_SPEED = 30; // in seconds
  const duration = `${DEFAULT_SPEED + speed}s`;

  const handleChange = (e) => {
    setSpeed(Number(e.target.value));
  };
  const handleClick = () => {
    console.log(play);
    setPlay(!play);
  };

  const TEXT = `Welcome to my portfolio. I’m glad you’ve
          stopped by. Click around and see what
          you can find. Here strictly on business?
          The “Work” tab contains my latest
          projects. They’re also at the bottom of
          this page, but you’ll have to scroll
          through some other stuff first ...you might get distracted from
          what you’re supposed to be doing. You
          might even have fun.`;

  const textStyle = {
    animationDuration: duration,
    animationPlayState: play ? null : "paused",
  };

  let sliderStyle;
  switch (speed) {
    case -20:
      sliderStyle = {
        "--thumb-image": "url('/pigeon.png')",
      };
      break;
    case -10:
      sliderStyle = {
        "--thumb-image": "url('/rabbit.png')",
      };
      break;
    case 10:
      sliderStyle = {
        "--thumb-image": "url('/turtle.png')",
      };
      break;
    case 20:
      sliderStyle = {
        "--thumb-image": "url('/snail.png')",
      };
      break;
    case 0:
    default:
      sliderStyle = {
        "--thumb-image": "url('/toddler.png')",
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
