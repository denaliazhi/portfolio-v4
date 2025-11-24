export default function Footer() {
  return (
    <footer>
      <a href="/Secret">
        <p>This site was made by a squirrel 🐿️</p>
      </a>
      <div className="socials">
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/denaliazhi/"
          aria-label="LinkedIn"
        >
          <span className="icon"></span>
        </a>
        <a
          id="github"
          href="https://github.com/denaliazhi"
          aria-label="Github"
        >
          <span className="icon"></span>
        </a>
      </div>
    </footer>
  );
}
