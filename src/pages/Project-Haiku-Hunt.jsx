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
                  Observation was all it took to
                  play. We'd check an item off our
                  shared note once we found it.
                </p>
                <p>
                  <span className="highlight">
                    Though mundane, every
                    discovery felt like a moment
                    worth celebrating.
                  </span>{" "}
                  I wanted to share this sentiment
                  through Haiku Hunt.
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
              a month diving into Node and
              PostgreSQL.
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
              I merged the above assignments into
              one so that I could have a more
              complete and polished product by the
              end.
            </p>
            <p>
              I imagined an app that was
              part-poetry forum, part-scavenger
              hunt— an homage to New York City
              that could be enjoyed by locals and
              outsiders alike.
            </p>
          </OneCol>
          <hr />
          <OneCol>
            <h2>Data</h2>
            <p>
              My first order of business was
              finding an appropriate data source.
              I settled on the{" "}
              <a href="https://data.cityofnewyork.us/Recreation/NYC-Parks-Monuments/6rrm-vxj9/about_data">
                Parks Monuments dataset
              </a>{" "}
              from NYC Open Data.
            </p>
          </OneCol>
          <hr />
          <OneCol>
            <h2>Design</h2>
            <p></p>
          </OneCol>
          <hr />
          <OneCol>
            <h2>Development</h2>
            <p></p>
            <ButtonBar label="Check it out">
              <a href="https://haiku-hunt.koyeb.app/">
                Demo
              </a>
              <a href="https://github.com/denaliazhi/haiku-hunt">
                Github repository
              </a>
            </ButtonBar>
          </OneCol>
        </article>
      </PageTemplate>
    </>
  );
}
