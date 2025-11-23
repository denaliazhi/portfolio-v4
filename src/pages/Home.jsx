import Hero from "../components/Hero";
import ProjectsContainer from "../components/Projects-Container";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <ProjectsContainer content={projects} />
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
