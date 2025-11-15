import { projects } from "../data/projects-data";
import PageTemplate from "../components/Page-Template";
import ProjectHeader from "../components/Project-Header";
import Carousel from "../components/Carousel";
import TwoCol from "../components/Two-Col";
import OneCol from "../components/One-Col";
import Accordion from "../components/Accordion";
import ImageCaption from "../components/Image-Caption";
import ButtonBar from "../components/Button-Bar";

export default function HaikuHunt() {
  const project = projects.haikuHunt;
  return (
    <>
      <PageTemplate className="haiku-hunt project-page">
        <article>
          <ProjectHeader
            title={project.title}
            desc={project.desc_long}
            type={project.type}
            tools={project.tools}
          />
          <Carousel
            images={project.images_featured}
          ></Carousel>
          <TwoCol
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
                  We didn't collect any tangibles.
                  Observation was all it took to
                  play.{" "}
                  <span className="highlight">
                    In mundane moments, we found
                    occasions to celebrate.
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
          <OneCol id="haiku-task">
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
            <Accordion
              startOpen={true}
              heading="1. A basic message board"
            >
              <p>
                It would allow users to post
                messages with their name and date.
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
          </OneCol>
          <hr />
          <OneCol>
            <h2>My Twist</h2>
            <p>
              I decided to merge the above
              assignments into one complete and
              polished product. I imagined an app
              that was part-poetry forum,
              part-scavenger hunt— an homage to
              New York City that could be enjoyed
              by locals and outsiders alike.
            </p>
          </OneCol>
          <hr />
          <OneCol id="haiku-data">
            <h2>Data</h2>
            <p>
              I chose the{" "}
              <a href="https://data.cityofnewyork.us/Recreation/NYC-Parks-Monuments/6rrm-vxj9/about_data">
                NYC Parks Monuments (NPM) dataset
              </a>{" "}
              as a starter source because it had a
              number of fields that could serve as
              details for scavenger hunt "items."
              These fields included the names,
              locations, and descriptions of
              landmarks around the city.
            </p>
            <table>
              <caption>About the dataset</caption>
              <thead>
                <tr>
                  <th>Rows</th>
                  <th>Columns</th>
                  <th>Each row is a</th>
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
                </tr>
              </tbody>
            </table>
            <p>
              At first, the names of the landmarks
              would be hidden, and users would
              guess them based on clues written in
              the form of haikus. This set-up
              meant that I'd need to write an
              initial clue for each landmark.
            </p>
            <p>
              To make this task easier for myself,
              I would take a subset of the data.
              My criteria would be monuments that
              were "fountains" for which there
              were about 50 rows.
            </p>
            <h3>Designing the schema</h3>
            <p>
              To start, I planned two tables for
              my database: Landmarks and Clues.
              Later on, I'd modify the schema to
              capture user-specific data.{" "}
            </p>
            <img
              src="projects/haiku-er-diagram.jpg"
              alt="Entity relationship diagram"
              height="458"
              width="756"
            />
            <p>
              Whenever I wanted to add a new table
              or columns, I'd rerun my
              initialization script, which would
              drop and recreate all tables.
              However, a different approach would
              be required in a production-level
              environment where existing data
              should be retained.
            </p>
            <h3>Extracting the data</h3>
            <p>
              To get the data into my tables, I
              queried the NPM dataset via the
              Socrata Open Data API. During this
              process, I figured out how to
            </p>
            <ol>
              <li>
                Format query parameters using
                Socrata Query Language (SoQL)
              </li>
              <li>Decode a ReadableStream</li>
              <li>
                Paginate through results without
                pagination metadata
              </li>
            </ol>
            <h3>Transforming the data</h3>
            <p>
              Next, I performed an exploratory
              analysis on the data and handled
              inconsistencies:
            </p>
            <ol>
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
            </ol>
          </OneCol>
          <hr />
          <OneCol>
            <h2>Design</h2>
            <p>
              I kept the interface relatively
              simple in order to focus on backend
              concepts. The main view would
              display a grid of cards. Clicking on
              a card would reveal all clues and
              details for a landmark. Users who
              correctly guessed the landmark's
              name would then get to submit their
              own clues through a form.{" "}
            </p>
            <aside>
              In these mockups, the app is titled
              "Fifty Fountains" due to the subset
              of NPM data that I used to populate
              the database. After considering
              scalability, I'd change the name to
              "Haiku Hunt."
            </aside>
            <img
              src="projects/haiku-mockups.png"
              alt="Mockups for the app"
              height="286"
              width="756"
            />
            <p>
              Unlike my{" "}
              <a href="/ESL-Grocery-Shop">
                ESL Grocery Shop
              </a>{" "}
              app, where I'd scaled down all of
              the content to fit on mobile
              devices, I prioritized a responsive
              layout that could adjust to
              different screen widths.
            </p>
            <img
              src="/projects/haiku-responsive-design.gif"
              alt="Testing responsiveness using Chrome dev tools"
            />
          </OneCol>
          <hr />
          <OneCol id="haiku-dev">
            <h2>Development</h2>
            <h3>Approach</h3>
            <p>
              During this phase, I took an
              incremental approach to development.
              For each view, I would
            </p>
            <ol>
              <li>
                Write the queries to retrieve the
                required data{" "}
              </li>
              <li>
                Build the barebones features to
                display that data
              </li>
              <li>
                Style the view to match the mockup
              </li>
              <li>Repeat for the next view.</li>
            </ol>
            <p>
              Following this process, I targeted
              first the results page, then the
              landmark details page, then the clue
              submission form. Finally, I added
              user login and user dashboard. This
              way the app was usable at each stage
              with increasing levels of
              functionality.
            </p>
            <h3>Challenges</h3>
            <p>
              My primary challenges to
              implementation were as follows:
            </p>
            <Accordion heading="Keeping code organized">
              Between the routes, controllers, and
              EJS templates, I began to feel like
              my code was disorganized and had to
              refactor several times to make the
              naming and nesting more
              intuitive.Determining route names.
              Sometimes actions might be
              associated with user or landmark,
              how to name the route?
            </Accordion>
            <Accordion heading="Dynamically rendering the frontend">
              EJS felt painfully tedious to write
              compared to React. I started
              breaking it out into partials like
              components. I learned afterwards
              about separating the frontend and
              backend utilizing RESTful API to
              communicate between the two.
            </Accordion>
            <Accordion heading="Expanding the schema">
              Re-planning / updating database as
              needs changed
            </Accordion>
            <h3>Future objectives</h3>
            <p>
              There are a lot of features I'd love
              to implement and ways to improve the
              app. If I were to work more on this
              app, I would add the ability for
              users to submit new landmarks so
              that there wouldn't be the issue of
              landmarks in a state of Catch-22
              (where users had no clues to guess
              the landmark, thus no users could
              write clues). I'd want to rebuild it
              with react on the frontend.
            </p>
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
          <OneCol>
            <h2>Final Thoughts</h2>
            <p>
              This app is a marker of how far I've
              come since writing my first recipe
              website at the start of this web
              development journey. I'm excited to
              keep learning and building.
            </p>
          </OneCol>
        </article>
      </PageTemplate>
    </>
  );
}
