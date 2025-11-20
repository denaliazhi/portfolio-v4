import { projects } from "../data/projects-data";
import ProjectNav from "../components/Project-Nav";
import ProjectHeader from "../components/Project-Header";
import Carousel from "../components/Carousel";
import TwoCol from "../components/Two-Col";
import OneCol from "../components/One-Col";
import Accordion from "../components/Accordion";
import Callout from "../components/Callout";
import ImageCaption from "../components/Image-Caption";
import ButtonBar from "../components/Button-Bar";
import { useRef } from "react";

export default function HaikuHunt() {
  const project = projects.haikuHunt;
  const articleRef = useRef(null);

  return (
    <>
      <main className="haiku-hunt project-page">
        <article ref={articleRef}>
          <ProjectHeader
            title={project.title}
            date={project.date}
            desc={project.desc_long}
            type={project.type}
            tools={project.tools}
          />
          <Carousel
            images={project.images_featured}
          ></Carousel>
          <TwoCol
            id="background"
            ratio={[3, 2]}
            col1={
              <>
                <h2>Background</h2>
                <p>
                  While studying at New York
                  University, I would sometimes go
                  on scavenger hunts with my
                  friends. We'd wander around the
                  city in search of random yet
                  plausible items like a "Trader
                  Joes tote" or a "striped orange
                  cone."
                </p>
                <p>
                  All it took to play was
                  observation, yet even{" "}
                  <span className="highlight">
                    in the most mundane
                    discoveries, we found reasons
                    to celebrate.
                  </span>{" "}
                  That sentiment inspired Haiku
                  Hunt.
                </p>
              </>
            }
            col2={
              <ImageCaption
                image={{
                  src: "/projects/haiku-city-proof.png",
                  alt: "Me in front of Washington Square Fountain",
                  caption:
                    "Obligatory grad photo in Washington Square Park",
                }}
              />
            }
          />
          <hr />
          <OneCol id="task">
            <h2>The (Original) Task</h2>
            <p>
              During this leg of my web
              development journey, I'd moved from
              the frontend to the backend. I spent
              a month{" "}
              <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs">
                diving into Node
              </a>{" "}
              and PostgreSQL.
            </p>
            <p>
              The Odin Project provided three
              assignments to practice what I'd
              learned:{" "}
            </p>
            <div className="accordion-group">
              <Accordion
                startOpen={true}
                heading="1. A basic message board"
              >
                <p>
                  It would allow users to post
                  messages with their name and
                  date.
                </p>
                <ul className="tags">
                  <li>Express routing</li>
                  <li>MVC pattern</li>
                  <li>EJS templating</li>
                </ul>
              </Accordion>
              <Accordion heading="2. An inventory manager">
                <p>
                  It would allow users to create,
                  read, update, and delete items.
                </p>
                <ul className="tags">
                  <li>Database operations</li>
                  <li>Fetching data from API</li>
                </ul>
              </Accordion>
              <Accordion heading="3. A members-only message board">
                <p>
                  It would allow users to sign up
                  for an account. Only signed-in
                  users would be able to post and
                  view the details of messages.
                </p>
                <ul className="tags">
                  <li>User authentication</li>
                  <li>Form validation</li>
                </ul>
              </Accordion>
            </div>
          </OneCol>
          <hr />
          <OneCol id="take">
            <h2>My Take</h2>
            <p>
              I decided to merge the above
              assignments into a more polished
              product. I imagined an app that was{" "}
              <span className="highlight">
                part-poetry forum, part-scavenger
                hunt
              </span>
              — an homage to New York City that
              could be enjoyed by locals and
              outsiders alike.
            </p>
          </OneCol>
          <hr />
          <OneCol id="data">
            <h2>Data</h2>
            <p>
              I chose the{" "}
              <a href="https://data.cityofnewyork.us/Recreation/NYC-Parks-Monuments/6rrm-vxj9/about_data">
                NYC Parks Monuments (NPM) dataset
              </a>{" "}
              as a starter source. It had a number
              of fields that could serve as
              details for scavenger hunt "items,"
              including the locations and
              dedicated dates of landmarks around
              the city.
            </p>
            <table>
              <caption>About the dataset</caption>
              <thead>
                <tr>
                  <th>Rows</th>
                  <th>Columns</th>
                  <th>Each row is a</th>
                  <th>Sample fields</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3,762</td>
                  <td>34</td>
                  <td>
                    monument maintained by NYC
                    Parks
                  </td>
                  <td>
                    <ul>
                      <li>name</li>
                      <li>parkname</li>
                      <li>location</li>
                      <li>architect</li>
                      <li>dedicated</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Each landmark would need an initial
              clue for users to guess, so I
              subsetted the data to make the work
              easier for myself. I would target
              only monuments that were
              "fountains."
            </p>
            <aside>
              <p className="bold">
                Why fountains?
              </p>
              <p>
                My reasons for this criteria are
                personal and practical. First, I
                have a friend who likes fountains.
                Second, fountains are some of the
                more popular landmarks in NYC
                Parks (the scope of this dataset).
                Third, I find it easier to write
                poems about fountains than about
                statues, portraits, or plaques.
                Sorry, "
                <a href="https://www.nycgovparks.org/parks/madison-square-park/monuments/55">
                  Chester Alan Arthur
                </a>
                ."
              </p>
            </aside>
            <h3 id="schema">Schema</h3>
            <p>
              To start, I planned two tables for
              my database: Landmarks and Clues.
              Later on, I'd add user-specific
              tables so that I could implement a
              login screen and user dashboard.{" "}
            </p>
            <img
              src="projects/haiku-er-diagram.jpg"
              alt="Entity relationship diagram"
              height="458"
              width="756"
            />
            <p>
              Whenever I wanted to modify the
              schema, I'd simply rerun my set-up
              script to overwite the existing
              tables. However, a production-level
              app would require a different
              approach.
            </p>
            <h3 id="acquisition">Acquisition</h3>
            <p>
              To populate my tables, I queried the
              NPM dataset via the{" "}
              <a href="https://dev.socrata.com/foundry/data.cityofnewyork.us/6rrm-vxj9">
                Socrata Open Data API
              </a>
              . During this process, I had to
              figure out how to
            </p>
            <ul>
              <li>
                Format query parameters using
                Socrata Query Language (SoQL)
              </li>
              <li>
                Decode a{" "}
                <code>ReadableStream</code>
              </li>
              <li>
                Paginate through results without
                pagination metadata
              </li>
            </ul>
            <h3 id="transformation">
              Transformation
            </h3>
            <p>
              Next, I performed an exploratory
              analysis on the data and handled
              inconsistencies:
            </p>
            <ul>
              <li>Removing duplicate rows</li>
              <li>
                Removing rows that didn't meet the
                subset criteria
              </li>
              <li>
                Removing rows where the landmark
                no longer existed in public
              </li>
              <li>
                Filling in columns for which the
                API returned no value
              </li>
              <li>
                Standardizing values in
                categorical columns
              </li>
            </ul>
          </OneCol>
          <hr />
          <OneCol id="design">
            <h2>Design</h2>
            <p>
              I kept the design relatively simple.
              Top-level navigation would be shown
              in a sidebar on the left, and users
              would be able to drill down into the
              main content on the right.{" "}
            </p>
            <ImageCaption
              imageStyle="modern"
              image={{
                src: "projects/haiku-mockups.png",
                alt: "Mockups for the app",
                caption: `In these mockups, the app is titled
              "Fifty Fountains" due to the subset that I used to populate
              the database. After considering
              scalability, I changed the name to
              "Haiku Hunt."`,
              }}
              dimensions={{
                height: "286",
                width: "756",
              }}
            />
            <p>
              Unlike my{" "}
              <a href="/ESL-Grocery-Shop">
                ESL Grocery Shop
              </a>{" "}
              app, where I'd scaled the entire
              view to fit it on mobile devices, I
              prioritized a{" "}
              <span className="highlight">
                responsive layout
              </span>{" "}
              that could adjust to different
              screen widths.
            </p>
            <img
              src="/projects/haiku-responsive-design.gif"
              alt="Testing responsiveness using Chrome dev tools"
            />
          </OneCol>
          <hr />
          <OneCol id="development">
            <h2>Development</h2>
            <h3 id="approach">Approach</h3>
            <p>
              I developed the app in rough
              increments, meaning that for each
              feature I would
            </p>
            <ol>
              <li>
                Write queries to retrieve the
                required data
              </li>
              <li>
                Build the basic structure to
                display that data
              </li>
              <li>
                Add logic to handle user events
              </li>
              <li>
                Style the view to match its mockup
              </li>
            </ol>
            <p>
              I started with the main page,
              containing all landmark cards. Then,
              I worked on the details page for a
              single landmark. Then, I worked on
              the clue submission form. Finally, I
              added the user login and user
              dashboard.
            </p>
            <h3 id="challenges">Challenges</h3>
            <p>
              My biggest challenge was{" "}
              <span className="highlight">
                keeping the code organized
              </span>{" "}
              as the app grew. I spent quite a
              while renaming files, grouping
              related files into folders, and
              extracting re-usable snippets of
              code to improve the readability of
              my project. I trust that this
              process will become more intuitive
              with time and practice.
            </p>
            <p>
              Another challenge was implementing
              middleware for the first time, such
              as <code>passport-local</code> to
              authenticate users and{" "}
              <code>express-validator</code> to
              validate clue submissions.
            </p>
            <h3 id="objectives">
              Future objectives
            </h3>
            <p>
              During development, I seemed to
              generate an ever-growing list of
              potential features and improvements.
              Two items of particular interest to
              me are
            </p>
            <div className="accordion-group">
              <Accordion
                heading="Addressing the Catch-22 of Landmark Clues"
                startOpen={true}
              >
                <p>
                  It turns out that writing haikus
                  for fifty fountains was too much
                  work for one person (me). As a
                  result, landmarks missing their
                  initial clues can't be solved,
                  and only users who have solved
                  the landmarks can write clues...
                </p>
                <p>
                  To fix this Catch-22, I'd remove
                  the clueless landmarks and{" "}
                  <span className="highlight">
                    add a form through which users
                    could submit new landmarks
                  </span>{" "}
                  for others to guess. The form
                  would require each submission to
                  include an initial clue.
                </p>
              </Accordion>
              <Accordion heading="Rebuilding the frontend with React and REST API">
                <p>
                  When writing EJS templates, I
                  found myself breaking out the
                  code into partials which I'd
                  then{" "}
                  <code>
                    &lt;%- include() %&gt;
                  </code>{" "}
                  in multiple files, similar to
                  React's component-style
                  architecture. However, the
                  overall effect of the former
                  felt more tedious and less
                  readable than the latter.
                </p>
                <p>
                  Later on, I learned about the
                  "Jamstack," leveraging REST APIs
                  to connect separate frontend and
                  backend implementations. With
                  this knowledge, I'd like to
                  rebuild my app utilizing React
                  for the frontend.
                </p>
              </Accordion>
            </div>
            <ButtonBar label="Check it out">
              <a href="https://haiku-hunt.koyeb.app/">
                Demo
              </a>
              <a href="https://github.com/denaliazhi/haiku-hunt">
                Github repository
              </a>
            </ButtonBar>
          </OneCol>
          <hr />
          <OneCol id="thoughts">
            <h2>Final Thoughts</h2>
            <p>
              A few months ago, I was writing{" "}
              <a href="https://denaliazhi.github.io/odin-recipes/">
                static websites
              </a>{" "}
              in pure HTML and CSS. I'm proud of
              how much I've learned to reach this
              point of building full-stack web
              apps. At the same time, I realize
              more than ever how much I have yet
              to learn. The future is at once
              promising, uncertain, daunting, and
              exciting. Most of all, exciting. 🙂
            </p>
          </OneCol>
          <a href="/ESL-Grocery-Shop">
            <Callout
              icon="/projects/grocery-cover.png"
              content={{
                heading: "Care for another?",
                body: [
                  projects.groceryShop.desc_short,
                ],
              }}
            ></Callout>
          </a>
        </article>
        <ProjectNav
          anchorBase="haiku"
          sections={[
            "Background",
            "The (Original) Task",
            "My Take",
            [
              "Data",
              [
                "Schema",
                "Acquisition",
                "Transformation",
              ],
            ],
            "Design",
            [
              "Development",
              [
                "Approach",
                "Challenges",
                "Future Objectives",
              ],
            ],
            "Final Thoughts",
          ]}
          articleRef={articleRef}
        />
      </main>
    </>
  );
}
