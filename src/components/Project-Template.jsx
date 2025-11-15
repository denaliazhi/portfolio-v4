import { projects } from "../data/projects-data";
import PageTemplate from "../components/Page-Template";
import ProjectHeader from "../components/Project-Header";
import Carousel from "../components/Carousel";
import TwoCol from "../components/Two-Col";
import OneCol from "../components/One-Col";
import Accordion from "../components/Accordion";
import ImageCaption from "../components/Image-Caption";
import ButtonBar from "../components/Button-Bar";

export default function ProjectName() {
  const project = projects.ProjectName;
  return (
    <>
      <PageTemplate className="project-name project-page">
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
                <p>Some text</p>
              </>
            }
            col2={
              <ImageCaption
                image={{
                  src: "/projects/___.png",
                  alt: "",
                  caption: "",
                }}
              />
            }
          />
          <hr />
        </article>
      </PageTemplate>
    </>
  );
}
