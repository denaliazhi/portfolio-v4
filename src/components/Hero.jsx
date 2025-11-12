import { useState } from "react";

export default function Hero() {
  const [isAnimating, setIsAnimating] =
    useState(false);
  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <>
      <section className="hero">
        <div>
          <img
            id="playground-slide"
            src="/home/slide.png"
            alt="A playground slide"
            width="360"
            height="360"
          />
          <div
            className={
              isAnimating
                ? "greeting slide-down"
                : "greeting"
            }
            onClick={handleClick}
          >
            <h1>hi</h1>
            <span id="waving-hand"></span>
          </div>
        </div>
        <div className="hero-text">
          <h1>My name is</h1>
          <h1>
            Denalia Z
            <span className="dotted-text">
              hi
            </span>
          </h1>
          <h2>Designer & Developer</h2>
          {/* Swap on click, change flex order */}
        </div>
      </section>
    </>
  );
}
