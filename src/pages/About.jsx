import PageTemplate from "../components/Page-Template";
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
    <PageTemplate className="about">
      <img src="/about/title.svg" alt="" />
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
              <b>Is it cake...?</b> Yes! I baked a
              chiffon roll cake shaped like frogs
              on a log.
              <br />
              <br />I love getting creative in the
              kitchen. They say baking is a
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
              <br />
              Ask it to moo-ve.
              <br />
              <br />
              When I'm not online, I'm probably on
              a trail. In August, I hiked for 4
              days along the Alta Via 1.
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
              <br />I shared this <i>cool</i>{" "}
              experience with my hostel-mates in
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
    </PageTemplate>
  );
}
