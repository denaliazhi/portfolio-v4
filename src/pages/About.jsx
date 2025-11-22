import { useState } from "react";
import TwoCol from "../components/Two-Col";
import Timeline from "../components/Timeline";
import { toolkit } from "../data/toolkit-data";

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
      <h1>About</h1>
      <TwoCol
        ratio={[3, 4]}
        col1={
          <>
            <h2>My journey</h2>
            <p>
              I wrote my first computer program at
              the age of 12...Kidding, that's not
              how it went. I took a "scenic route"
              of sorts.
            </p>
            <p>(Read time: 1 minute)</p>
          </>
        }
        col2={
          <Timeline
            contents={[
              {
                open: true,
                heading:
                  "An introvert goes to business school",
                body: (
                  <p>
                    At the age of 18, I decided—
                    instead of engineering— to
                    attend business school where I
                    learned a thing or two about
                    communication.
                  </p>
                ),
              },
              {
                heading:
                  "Business with a side of design",
                body: (
                  <>
                    <p>
                      During my freshman fall, I
                      took a design elective that
                      opened up a{" "}
                      <a href="https://www.youtube.com/watch?v=EXTLJmYsaUQ&t=50s">
                        whole new world
                      </a>{" "}
                      for me. I learned how to use
                      digital tools like Figma and
                      Adobe Illustrator.
                    </p>{" "}
                    <p>
                      Over four years, I'd design
                      for two startups, a
                      nonprofit, and a student
                      publication in my free time.
                      Through these experiences,
                      I'd hone my eye for detail
                      and composition.
                    </p>
                  </>
                ),
              },
              {
                heading: "From design to code",
                body: (
                  <>
                    <p>
                      During my junior summer, I
                      took a free online CS course
                      (Harvard's CS50x). I found
                      more joy debugging code in
                      an IDE than I did building
                      any financial model in
                      Excel. By the end, I'd built
                      my very own web app.
                    </p>{" "}
                    <p>
                      During my remaining time in
                      college, I'd pursue a minor
                      in CS along with a "more
                      technical" concentration at
                      the business school. I'd
                      strengthen my analytical
                      skills through courses like
                      Data Structures, Database
                      Management, and Data-Driven
                      Decision Making.
                    </p>
                    <hr />
                    <p>
                      My interest in web design
                      and development, however,
                      would fall by the wayside
                      for the next three years.
                    </p>
                  </>
                ),
              },
              {
                heading:
                  "A detour into data analytics",
                body: (
                  <>
                    <p>
                      During my senior summer, I
                      interned as a data analyst
                      at a financial services
                      company. I liked sitting
                      between product and
                      engineering, but I wasn't
                      sure if the role was for me.
                      Well, only one way to find
                      out. I returned for a
                      full-time position.
                    </p>
                  </>
                ),
              },
              {
                heading:
                  "Returning to creative roots",
                body: (
                  <>
                    <p>
                      Over two years out of
                      college, I realized many
                      things about myself. One of
                      my realizations was that I
                      needed to pursue a different
                      route. I left my job to
                      learn web development
                      (again).
                    </p>
                    <p>
                      And well, the rest is on
                      this website.
                    </p>
                  </>
                ),
              },
            ]}
          />
        }
      ></TwoCol>
      <div id="toolkit">
        <h2>My toolkit</h2>
        <p>Hover over an icon for its label.</p>
        {Object.entries(toolkit).map(
          (category) => (
            <div key={category[0]}>
              <h3>
                {category[0][0].toUpperCase() +
                  category[0].slice(1)}
              </h3>
              <ul>
                {category[1].map((item) => (
                  <li key={item.tool}>
                    <span
                      className="icon"
                      style={{
                        backgroundImage: `url(${item.icon})`,
                      }}
                    ></span>
                    <p>{item.tool}</p>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
      {/* <h1>Some personal artifacts</h1>
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
      </section> */}
    </main>
  );
}
