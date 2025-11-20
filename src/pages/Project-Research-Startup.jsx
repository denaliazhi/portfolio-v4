import { projects } from "../data/projects-data";
import ProjectHeader from "../components/Project-Header";
import ProjectNav from "../components/Project-Nav";
import Carousel from "../components/Carousel";
import Callout from "../components/Callout";
import TwoCol from "../components/Two-Col";
import OneCol from "../components/One-Col";
import Accordion from "../components/Accordion";
import ImageCaption from "../components/Image-Caption";
import ButtonBar from "../components/Button-Bar";
import { useRef } from "react";

export default function ResearchStartup() {
  const project = projects.researchStartup;
  const articleRef = useRef(null);

  return (
    <main className="grocery-app project-page">
      <article ref={articleRef}>
        <ProjectHeader
          title={project.title}
          date={project.date}
          desc={project.desc_long}
          type={project.type}
          tools={project.tools}
        />
        <Carousel
          images={project.images_featured}
        ></Carousel>
      </article>
    </main>
  );
}
