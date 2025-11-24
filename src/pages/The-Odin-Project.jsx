import ProjectCard from "../components/Project-Card";
import { projects } from "../data/odin-projects";

export default function OdinProject() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <main className="odin">
      <h1>From zero to full-stack</h1>
      <p>
        This gallery showcases five months of my
        learnings with{" "}
        <a
          href="https://www.theodinproject.com/about"
          target="__blank"
        >
          The Odin Project
        </a>
        — a self-paced, open source curriculum for
        aspiring web developers. Completed in
        2025.
      </p>
      <section class="projects">
        <div>
          {Object.values(projects).map(
            (project) => {
              const simpleDate =
                months[project.date.getMonth()] +
                " " +
                project.date.getDate();
              return (
                <a
                  href={project.repo}
                  target="_blank"
                >
                  <ProjectCard
                    project={{
                      ...project,
                      tags: [
                        simpleDate,
                        ...project.focus,
                      ],
                    }}
                  />
                </a>
              );
            }
          )}
        </div>
      </section>
    </main>
  );
}
