import { useState } from "react";
import OneCol from "../components/One-Col";
import TwoCol from "../components/Two-Col";
import Timeline from "../components/Timeline";
import Artifacts from "../components/Artifacts";
import { toolkit } from "../data/toolkit";

export default function About() {
  return (
    <main className="about">
      <h1>About</h1>
      <Artifacts></Artifacts>
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
                heading:
                  "From design to computer science",
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
                      company. I liked working
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
                      During my first two years
                      out of college, I made
                      several important
                      realizations about myself.
                      One of my realizations was
                      that I needed to pursue a
                      different role. I left my
                      job to learn web development
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
        <p>
          Hover or tap on an icon for its label.
        </p>
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
    </main>
  );
}
