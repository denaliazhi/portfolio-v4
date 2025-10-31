import { useState } from "react";

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);
  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <>
      <div className="hero">
        <div>
          <img
            id="playground-slide"
            src="/slide.png"
            alt="A playground slide"
          />
          <div
            className={isAnimating ? "greeting slide-down" : "greeting"}
            onClick={handleClick}
          >
            <h1>hi</h1>
            <span id="waving-hand"></span>
          </div>
        </div>
        <div className="hero-text">
          <h1>My name is</h1>
          <h1>
            Denalia Z<span className="dotted-text">hi</span>
          </h1>
        </div>
      </div>
      <h2>What's that saying?</h2>
    </>
  );
}
