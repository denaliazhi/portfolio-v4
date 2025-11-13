import PageTemplate from "../components/Page-Template";
import ProjectHeader from "../components/Project-Header";
import Carousel from "../components/Carousel";
import { projects } from "../data/projects-data";
import Callout from "../components/Callout";
import TwoCol from "../components/Two-Col-Text-Image";
import OneCol from "../components/One-Col-Text";
import Accordion from "../components/Accordion";

export default function GroceryApp() {
  const project = projects.groceryShop;

  return (
    <PageTemplate className="grocery-app project-page">
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
        <Callout
          icon="lightbulb"
          content={{
            heading:
              "In a country where you don't know the language, how do you shop for groceries?",
            body: [
              "If you can't figure out the store layout, can't read the signs, and can't ask for help, an everyday activity might feel like a challenge.",
            ],
          }}
        />
        <TwoCol
          images={[
            {
              src: "esl-students.png",
              alt: "My ESL students and I",
              caption:
                "My last day as an ESL teacher",
            },
          ]}
        >
          <h2>Background</h2>
          <p>
            During my first job out of college, I
            spent my evenings volunteering at the
            local library as an ESL teacher. My
            students— immigrants with little to no
            understanding of the English language—
            often faced situations like the one
            above.
          </p>
          <p>
            Early on, I sensed their doubt and
            frustration as they tried to learn a
            new language.{" "}
            <span className="highlight">
              Connecting our lessons to their
              everyday lives was crucial
            </span>{" "}
            to securing their investment in the
            process.
          </p>
          <p>
            I used various strategies to build
            real world context in the classroom,
            but at times, I felt like the
            resources that I had were
            insufficient.
          </p>
        </TwoCol>
        <hr />
        <OneCol>
          <h2>The (Original Task)</h2>
          <p>
            Some months into learning web
            development with The Odin Project, I
            reached an assignment to build a mock
            shopping cart 🛒 with React.{" "}
          </p>
          <p>The requirements were as follows:</p>
          <ol>
            <li>
              A <span className="bold">shop</span>{" "}
              page, displaying items that a user
              could add to their cart
            </li>
            <li>
              A <span className="bold">cart</span>{" "}
              page, showing the user's selected
              items and their quantities
            </li>
          </ol>
        </OneCol>
        <hr />
        <OneCol id="grocery-twist">
          <h2>My Twist</h2>
          <p>
            Based on my teaching experience, I
            decided to incorporate the shopping
            cart into a narrative app about
            grocery shopping that could be used by
            ESL students and teachers.
          </p>
          <h3>Benefits for students</h3>
          <Accordion
            startOpen={true}
            heading="a realistic context for grammar and vocabulary"
          >
            <p>
              Through a virtual visit to the
              grocery store, the app would allow
              students to associate the language
              of shopping with familiar scenes and
              actions.
            </p>
          </Accordion>
          <Accordion
            startOpen={false}
            heading="accessible pronunciation practice"
          >
            <p>
              Event-based audio narration would
              help students practice their
              pronunciation outside of class,
              where they often aren't around
              English speakers.
            </p>
          </Accordion>
          <h3>Benefits for teachers</h3>{" "}
          <Accordion
            startOpen={false}
            heading="ready-to-use and reusable content"
          >
            <p>
              Teachers wouldn't need to prepare a
              lesson about grocery shopping from
              scratch. They'd save the time and
              effort required to set scene in the
              classroom.
            </p>
          </Accordion>
          <Accordion
            startOpen={false}
            heading="a source of engagement during in-person or online class"
          >
            This app would allow students to
            interact with the content in a way
            that's difficult to achieve through
            other means.
          </Accordion>
        </OneCol>
        <hr />
      </article>
    </PageTemplate>
  );
}
