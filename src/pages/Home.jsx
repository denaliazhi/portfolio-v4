import Hero from "../components/Hero";
import ProjectsContainer from "../components/Projects-Container";
import { projects } from "../data/projects-data";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <hr />
      <ProjectsContainer
        heading="My latest projects"
        content={projects}
      />
      {/* <TwoCol
        id="page-links"
        ratio={[1, 1]}
        col1={
          <Callout
            icon="/home/"
            content={{
              heading:
                "Woah— it's a time machine!",
              body: ["I wonder where it goes..."],
            }}
          />
        }
      /> */}
    </main>
  );
}
