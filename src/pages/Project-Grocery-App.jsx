import { projects } from "../data/projects-data";
import PageTemplate from "../components/Page-Template";
import ProjectHeader from "../components/Project-Header";
import Carousel from "../components/Carousel";
import Callout from "../components/Callout";
import TwoCol from "../components/Two-Col";
import OneCol from "../components/One-Col";
import Accordion from "../components/Accordion";
import ImageCaption from "../components/Image-Caption";
import WordBlocks from "../components/WordBlocks";

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
            Inspired by my teaching experience, I
            decided to{" "}
            <span className="highlight">
              turn the shopping cart into a
              narrative app about grocery shopping
            </span>{" "}
            that might benefit ESL students and
            teachers.
          </p>
          <h3>Benefits for students</h3>
          <Accordion
            startOpen={true}
            heading="a realistic context for grammar and vocabulary"
          >
            <p>
              Through a virtual grocery store,
              students would be able to associate
              the language of shopping with
              familiar scenes and actions.
            </p>
          </Accordion>
          <Accordion heading="accessible pronunciation practice">
            <p>
              ESL students often live and work
              around non-English speakers, so they
              struggle to practice their
              pronunciation outside of class. This
              app would feature text-to-speech
              event narration to address this gap.
            </p>
          </Accordion>
          <h3>Benefits for teachers</h3>{" "}
          <Accordion heading="ready-to-use and reusable content">
            <p>
              Teachers would save the time and
              effort of preparing a lesson from
              scratch or setting up a scene in the
              classroom.
            </p>
          </Accordion>
          <Accordion heading="a source of engagement during in-person or online class">
            <p>
              This app would allow students to
              engage with the content in a way
              that would be difficult to achieve
              through traditional means such as
              slides.
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
          <Accordion
            heading="How do I balance realism with abstraction?"
            startOpen={true}
          >
            <p>
              A realistic store interface could
              help students translate the lesson
              to their own lives. At the same
              time, digital realism might confuse
              them if they're used to the
              abstraction of online shopping.
            </p>
            <aside>
              <p>
                <span className="bold">
                  Example
                </span>
              </p>{" "}
              <p>
                In the physical world, a shopper
                might take a product from the
                shelf and set it in their cart. A
                realistic online store could mimic
                that action by requiring the user
                to drag and drop images of
                products. However, most users have
                learned to click on an "Add to
                cart" button instead.
              </p>
            </aside>
            <p>
              <span className="bold">
                I decided that
              </span>{" "}
              the product display and cart would
              retain the familiarity of an online
              store while{" "}
              <span className="highlight">
                the background image would change
                to match the grocery section
              </span>
              , simulating a physical store.
            </p>
            <TwoCol
              col1={
                <ImageCaption
                  image={{
                    src: "/projects/grocery-store-exterior.png",
                    alt: "Exterior of the grocery store",
                    caption:
                      "An scene establishing the “physical” store setting",
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
              In addition, bookend scenes outside
              the store would add realism without
              convoluting the shopping experience.
            </p>
          </Accordion>
          <Accordion heading="How do I convey the app’s educational value?">
            <p>
              I would create context in two ways.
              First, the main content would be
              preceded by a dialog box that
              informs the user of the lesson's
              purpose. Second, details about the
              lesson would be included in a
              section under the main content.
            </p>
          </Accordion>
          <Accordion heading="How do I ensure students follow the user flow?">
            <p>
              Students would need to navigate
              between a linear, click-through mode
              for bookend scenes and a free-roam
              mode for the shopping scenes.
            </p>
            <p>
              During both modes, a narration bar
              at the bottom of the screen would
              provide users with{" "}
              <span className="highlight">
                consistent visual and audio cues
              </span>{" "}
              . Animations (with CSS) would offer
              additional feedback on interactive
              elements.
            </p>
          </Accordion>
        </OneCol>
        <hr />
        <OneCol id="grocery-development">
          <h2>Development</h2>
          <p>
            Some of the challenges during
            implementation were
          </p>
          <WordBlocks
            content={[
              "Handling different routes within a single-page application",
              "Translating the Figma design into React components",
              "Representing English language with programming logic",
              "Managing multiple states and side effects",
              "Writing frontend tests",
            ]}
          />
          <p>
            During this process, I rethought and
            refactored my code several times. It
            was difficult to move on, knowing that
            the project still had great room for
            improvement. However, I had a ways to
            go in my journey with The Odin
            Project, so I settled on “progress
            over perfection.” Technical details
            can be viewed on my Github repository:
          </p>
        </OneCol>
        <hr />
        <OneCol>
          <h2>Final Thoughts</h2>
          <p>
            This app felt beyond the scope of what
            I knew at the time. However, I was
            able to prove to myself— as I did
            throughout my web development journey—
            that the challenges I thought were
            “insurmountable” could in fact be
            surmounted with time and persistence.
          </p>
          <p>
            I’m glad to have turned a generic
            shopping cart into an accessible tool
            for education, and I’d love to build
            on this theme through future products.
          </p>
        </OneCol>
        <hr />
      </article>
    </PageTemplate>
  );
}
