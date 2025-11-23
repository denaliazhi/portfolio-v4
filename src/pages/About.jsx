import { useState } from "react";
import OneCol from "../components/One-Col";
import TwoCol from "../components/Two-Col";
import Timeline from "../components/Timeline";
import Artifacts from "../components/Artifacts";
import { toolkit } from "../data/toolkit";
import { personalTimeline } from "../data/personal-timeline";

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
              how it went.
            </p>
            <p>
              I took "the scenic route" of sorts.
              (Read time: 1 minute)
            </p>
          </>
        }
        col2={
          <Timeline contents={personalTimeline} />
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
