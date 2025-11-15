import PageTemplate from "../components/Page-Template";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Pitch from "../components/Pitch";
import ProjectsContainer from "../components/Projects-Container";
import Callout from "../components/Callout";
import { projects } from "../data/projects-data";

export default function Home() {
  return (
    <>
      <PageTemplate className="home">
        <Hero />
        <hr />
        <ProjectsContainer
          heading="My latest projects"
          content={projects}
        />
        {/* <Marquee />
        <Pitch /> */}
        <Callout
          icon="lightbulb"
          content={{
            heading: "View all projects",
            body: [
              "If you can't figure out the store layout, can't read the signs, and can't ask for help, an everyday activity might feel like a challenge.",
            ],
          }}
        ></Callout>
      </PageTemplate>
    </>
  );
}
