import { useState } from "react";
import TwoCol from "../components/Two-Col";
import Timeline from "../components/Timeline";

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
        ratio={[1, 1]}
        col1={
          <>
            <h2>My journey</h2>
            <p>
              I wrote my first program at the age
              of 12...Wait no, that's not how it
              went.
            </p>
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
                    At the age of 18, I decided to
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
                      for me.
                    </p>{" "}
                    <p>
                      Over four years, I'd design
                      for two startups, a
                      nonprofit, and a student
                      publication. These
                      experiences would hone my
                      eye for detail and
                      composition.
                    </p>
                  </>
                ),
              },
              {
                heading: "From design to code",
                body: (
                  <>
                    <p>
                      Out of curiosity, I took a
                      free online CS course
                      (CS50x) during my junior
                      summer. By the end, I'd
                      built my very own web app
                      and realized, "Hey, I like
                      to code!"
                    </p>{" "}
                    <p>
                      I decided to minor in CS
                      alongside my major in
                      business. Foundational
                      courses like Data Structures
                      would reshape my approach to
                      problem-solving.
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
                      company. I wasn't sure where
                      the route would take me but
                      figured I'd give it a shot.
                      I went back for a full-time
                      role.
                    </p>
                  </>
                ),
              },
              {
                heading:
                  "Returning to creative roots",
                body: (
                  <p>
                    After two introspective years,
                    I realized that I didn't want
                    to continue down that route. I
                    decided to take a leap of
                    faith that I hadn't taken in
                    college. I left my job to
                    learn web development on my
                    own.
                  </p>
                ),
              },
            ]}
          />
        }
      ></TwoCol>
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
