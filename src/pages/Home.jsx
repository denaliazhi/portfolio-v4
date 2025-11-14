import PageTemplate from "../components/Page-Template";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Pitch from "../components/Pitch";
import ProjectsContainer from "../components/Projects-Container";
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
      </PageTemplate>
    </>
  );
}
