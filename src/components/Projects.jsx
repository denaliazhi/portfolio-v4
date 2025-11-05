export default function Projects() {
  return (
    <section className="projects">
      <h2>Here's a sample of my work</h2>
      <div>
        <article>
          <h3>
            A narrative app for English learners
          </h3>
          <div>
            <img
              src="/cover-grocery.png"
              alt="Cover of ESL grocery shopping app"
              height="250"
              width="350"
            />
          </div>
          <ul>
            <li>React</li>
            <li>Personal project</li>
          </ul>
        </article>
        <article>
          <h3>
            A poetic, open-source scavenger hunt
          </h3>
          <div>
            <img
              src="/cover-haiku-2.png"
              alt="Cover of Haiku Hunt app"
              height="250"
              width="350"
            />
          </div>
          <ul>
            <li>Node/Express</li>
            <li>SQL</li>
            <li>Personal project</li>
          </ul>
        </article>
        <article>
          <h3>
            A launch page for a research startup
          </h3>
          <div>
            <img
              src="/cover-orbitl.png"
              alt="Cover of Orbitl website"
              height="250"
              width="350"
            />
          </div>
          <ul>
            <li>Wordpress</li>
            <li>Client project</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
