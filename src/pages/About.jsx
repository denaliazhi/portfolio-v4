import { useState } from "react";

export default function About() {
  const DEFAULT_SPEECH = `Hey, it's me! Click on something, and I'll tell you more about it.`;
  const [speech, setSpeech] =
    useState("headshot");

  const handleClick = (e) => {
    if (
      e.target.nodeName === "IMG" ||
      e.target.nodeName === "FIGCAPTION"
    ) {
      setSpeech(e.target.parentNode.id);
    } else {
      setSpeech(e.target.id);
    }
  };

  return (
    <main className="about">
      {/* <img src="/about/title.svg" alt="" /> */}
      <h1>Some personal artifacts</h1>
      <section id="artifacts">
        <figure id="cake" onClick={handleClick}>
          <img
            src="/about/cake.png"
            alt=""
            width="145"
            height="90"
          />
          <figcaption>Is it cake...?</figcaption>
        </figure>
        <figure id="hiking" onClick={handleClick}>
          <img
            src="/about/hiking.png"
            alt=""
            width="75"
            height="90"
          />
          <figcaption>
            How do you get a cow off the trail?
          </figcaption>
        </figure>

        <div id="headshot">
          <img
            src="/about/headshot.png"
            alt=""
            width="200"
            height="210"
            onClick={handleClick}
          />
          {speech === "headshot" && (
            <pre className="speech-bubble">
              {DEFAULT_SPEECH}
            </pre>
          )}
          {speech === "cake" && (
            <pre className="speech-bubble">
              <a href="https://share.google/e8iDkdX2rgz8q1EK6">
                <b>Is it cake?</b>
              </a>{" "}
              Yes! I baked a chiffon roll cake
              shaped like frogs on a log.
              <br />
              <br />I love getting{" "}
              <a href="https://www.instagram.com/bydenalia/?hl=en">
                creative
              </a>{" "}
              in the kitchen. They say baking is a
              science. I say, 'A science{" "}
              <em>experiment</em>.'
            </pre>
          )}
          {speech === "hiking" && (
            <pre className="speech-bubble">
              <b>
                How do you get a cow off the
                trail?
              </b>{" "}
              Ask it to moo-ve.
              <br />
              <br />
              When I'm not online, I'm likely
              outdoors. In August, I went on a
              4-day hike along the Alta Via 1.
            </pre>
          )}
          {speech === "snorkeling" && (
            <pre className="speech-bubble">
              <b>
                What happens if you snorkel with
                strangers?
              </b>{" "}
              There's a 100% chance you end up
              with something in common!
              <br />
              <br />I shared this cool experience
              (pun-intended) with hostel-mates in
              Iceland.
            </pre>
          )}
          {speech === "cat" && (
            <pre className="speech-bubble">
              This is my cat after I caught her
              red-handed (pawed?) on the toilet
              seat...
            </pre>
          )}
        </div>

        <figure
          id="snorkeling"
          onClick={handleClick}
        >
          <img
            src="/about/snorkeling.png"
            alt=""
            width="75"
            height="90"
          />
          <figcaption>
            What happens if you snorkel with
            strangers?
          </figcaption>
        </figure>
        <figure id="cat" onClick={handleClick}>
          <img
            src="/about/cat.png"
            alt=""
            width="116"
            height="90"
          />
          <figcaption>Meow?</figcaption>
        </figure>
      </section>
    </main>
  );
}
