import PageTemplate from "../components/Page-Template";
import ProjectHeader from "../components/Project-Header";
import Carousel from "../components/Carousel";
import { projects } from "../data/projects-data";
import Callout from "../components/Callout";
import TwoCol from "../components/Two-Col-Text-Image";
import OneCol from "../components/One-Col-Text";

export default function GroceryApp() {
  const project = projects.groceryShop;

  return (
    <PageTemplate className="project-page">
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
              "In a country where you don’t know the language, how do you shop for groceries?",
            body: [
              "If you can’t figure out the store layout, can’t read the signs, and can’t ask for help, an everyday activity might feel like a challenge.",
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
            <span class="highlight">
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
            shopping cart with React.{" "}
          </p>
          <p>The requirements were as follows:</p>
          <ol>
            <li>
              A shop page, displaying items that a
              user could add to their cart
            </li>
            <li>
              A cart page, showing the user’s
              selected items and their quantities
            </li>
          </ol>
        </OneCol>
        <hr />
        <OneCol>
          <h3>My Twist</h3>
          <p>
            Based on my teaching experience, I
            decided to incorporate the shopping
            cart into a narrative app about
            grocery shopping that could be used by
            ESL students and teachers.
          </p>
          <h4>For students</h4>
          <h4>For teachers</h4>
        </OneCol>
        <hr />
      </article>
    </PageTemplate>
  );
}
