import PageTemplate from "../components/Page-Template";
import ProjectHeader from "../components/Project-Header";
import Carousel from "../components/Carousel";
import { projects } from "../data/projects-data";
import Callout from "../components/Callout";
import TwoCol from "../components/Two-Col";
import OneCol from "../components/One-Col";
import Accordion from "../components/Accordion";
import ImageCaption from "../components/Image-Caption";

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
          ratio={[3, 2]}
          col1={
            <>
              <h2>Background</h2>
              <p>
                During my first job out of
                college, I spent my evenings
                volunteering at the local library
                as an ESL teacher. My students—
                immigrants with little to no
                understanding of the English
                language— often faced situations
                like the one above.
              </p>
              <p>
                Early on, I sensed their doubt and
                frustration as they tried to learn
                a new language.{" "}
                <span className="highlight">
                  A crucial part of keeping them
                  invested in the process was to
                  connect our lessons to their
                  everyday lives.
                </span>
              </p>
              <p>
                I used various strategies to build
                real world context in the
                classroom, but at times, I felt
                like the resources that I had were
                insufficient.
              </p>
            </>
          }
          col2={
            <ImageCaption
              image={{
                src: "/projects/grocery-esl-students.png",
                alt: "My ESL students and I",
                caption:
                  "My last day as an ESL teacher",
              }}
            />
          }
        />
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
          <Accordion heading="accessible pronunciation practice">
            <p>
              Event-based audio narration would
              help students practice their
              pronunciation outside of class,
              where they often aren't around
              English speakers.
            </p>
          </Accordion>
          <h3>Benefits for teachers</h3>{" "}
          <Accordion heading="ready-to-use and reusable content">
            <p>
              Teachers wouldn't need to prepare a
              lesson about grocery shopping from
              scratch. They'd save the time and
              effort required to set scene in the
              classroom.
            </p>
          </Accordion>
          <Accordion heading="a source of engagement during in-person or online class">
            <p>
              This app would allow students to
              interact with the content in a way
              that's difficult to achieve through
              other means.
            </p>
          </Accordion>
        </OneCol>
        <hr />
        <OneCol id="grocery-design">
          <h2>Design</h2>
          <p>
            I planned out a{" "}
            <span className="bold">
              user flow
            </span>{" "}
            based on the different stages of
            grocery shopping that I wanted to
            include in the app:
          </p>
          <img
            src="/projects/grocery-user-flow.png"
            alt="User flow for the app"
            height="350"
          />
          <p>
            The user would start the lesson
            outside of the store. Once inside,
            they’d be able to navigate between
            grocery sections and add items to
            their cart. When they were done
            shopping, they’d be able to check out
            and review their receipt.
          </p>
          <p>
            To visualize the user flow and
            interface, I created a basic{" "}
            <span className="bold">
              prototype
            </span>{" "}
            in Figma.
          </p>
          <img
            src="/projects/grocery-prototype.png"
            alt="Prototype for the app"
            height="356"
          />
          <p>
            Some of the key design questions that
            I asked were
          </p>
          <Accordion heading="How would I balance realism with abstraction?">
            <p>
              A realistic grocery store would help
              students relate the lesson content
              to their own lives. However, a
              digital medium that is too realistic
              could confuse users who expect
              certain abstractions when shopping
              online.
            </p>
            <p>
              For example, in the real world, a
              shopper might physically take a
              product from the shelf and set it in
              their cart. A realistic digital
              equivalent could be to require the
              user to drag and drop images of
              products into their cart. On the
              other hand, the standard action is
              simply to click on an "Add to cart"
              button.
            </p>
            <p>
              The product display and shopping
              cart would mirror the familiar
              design of an online store while the
              background image would change
              depending on the grocery section to
              simulate the user moving around a
              physical store.
            </p>
            <TwoCol
              col1={
                <ImageCaption
                  image={{
                    src: "/projects/grocery-store-exterior.png",
                    alt: "Exterior of the grocery store",
                    caption:
                      "A bookend scene establishing the “physical” setting",
                  }}
                  imageStyle="modern"
                />
              }
              col2={
                <ImageCaption
                  image={{
                    src: "/projects/grocery-frozen-foods.png",
                    alt: "Frozen foods section of the grocery store",
                    caption:
                      "A simplified product display with a realistic backdrop",
                  }}
                  imageStyle="modern"
                />
              }
            />
            <p>
              Also, bookend scenes that took place
              outside the store would add realism
              without convoluting the shopping
              experience.
            </p>
          </Accordion>
          <Accordion heading="How would I convey the app’s educational purpose?">
            <p>
              Under the main content, I would
              include a section with details like
              whom the app was intended for and
              what they could expect to learn. For
              additional context, the lesson would
              be preceded by an instructional
              dialog box.
            </p>
          </Accordion>
          <Accordion heading="How would I guide students along the user flow?">
            <p>
              The app would need to transition
              between a linear, click-through mode
              for bookend scenes and a free-roam
              mode for the shopping experience.
            </p>
            <p>
              During both modes, a narration bar
              at the bottom of the screen would
              provide users with consistent visual
              and audio cues to proceed. CSS
              animations would offer additional
              feedback for interactive elements.
            </p>
          </Accordion>
        </OneCol>
        <hr />
        <OneCol>
          <h2>Development</h2>
        </OneCol>
        <hr />
        <OneCol>
          <h2>Final Thoughts</h2>
        </OneCol>
        <hr />
      </article>
    </PageTemplate>
  );
}
