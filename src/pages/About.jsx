import TwoCol from "../components/Two-Col";
import Callout from "../components/Callout";
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
        id="journey"
        ratio={[3, 4]}
        col1={
          <>
            <h2>How'd I get here?</h2>
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
      />
      <TwoCol
        id="other-works"
        ratio={[1, 1]}
        col1={
          <a href="/The-Odin-Project">
            <Callout
              icon="/odin-projects/etch-a-sketch.png"
              content={{
                heading:
                  "Progress with The Odin Project",
                body: [
                  "Five months of learning web development",
                ],
              }}
            />
          </a>
        }
        col2={
          <a href="https://denaliazhi.github.io/portfolio-v2/projects.html">
            <Callout
              icon="/about/old-portfolio.png"
              content={{
                heading: "Data + Design Archive",
                body: [
                  "Projects from my college-era",
                ],
              }}
            />
          </a>
        }
      />

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
