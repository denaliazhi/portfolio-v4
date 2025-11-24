import { useEffect, useState } from "react";

export default function Hero() {
  const [isAnimating, setIsAnimating] =
    useState(false);
  const handleClick = () => {
    !isAnimating && setIsAnimating(true);
  };

  useEffect(() => {
    // Sound effect for slide animation
    const wee = new Audio(
      "/home/wee-floraphonic.mp3"
    );
    if (isAnimating) {
      wee.play();
      setTimeout(() => {
        setIsAnimating(false);
      }, 5000);
    }
    return () => {
      wee.pause();
      wee.currentTime = 0;
    };
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
            <p className="speech-bubble">
              {isAnimating
                ? "Weeee!"
                : "Give me a push?"}
            </p>
          </div>
        </div>
        <div className="hero-text">
          <h1>My name is</h1>
          <h1>
            Denalia Z
            <span
              className="letter-placeholder"
              onClick={handleClick}
            >
              hi
            </span>
          </h1>
          <hr id="hero-horizon" />
          <h2>
            A designer who develops. A developing
            designer. Pun enthusiast.
          </h2>
          {/* Swap on click, change flex order */}
        </div>
      </section>
    </>
  );
}
