import { useEffect, useState } from "react";

export default function Hero() {
  const [isAnimating, setIsAnimating] =
    useState(false);
  const handleClick = () => {
    !isAnimating && setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setIsAnimating(false);
      }, 5000);
    }
  }, [isAnimating]);

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
                ? "greeting sliding"
                : "greeting"
            }
            onClick={handleClick}
          >
            <h1>hi</h1>
            <span id="greeting-hand"></span>
            <span className="speech-bubble">
              {isAnimating
                ? "Weeee!"
                : "Mind giving me a push?"}
            </span>
          </div>
        </div>
        <div className="hero-text">
          <h1>My name is</h1>
          <h1>
            Denalia Z
            <span className="letter-placeholder">
              hi
            </span>
          </h1>
          <h2>Designer + Developer</h2>
          {/* Swap on click, change flex order */}
        </div>
      </section>
    </>
  );
}
