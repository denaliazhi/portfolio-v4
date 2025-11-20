import Header from "../components/Header";
import Footer from "../components/Footer";
import TwoCol from "../components/Two-Col";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found">
        <div>
          <img
            src="/icons/squirrel-minion.png"
            alt="A surprised squirrel, standing behind a computer"
            height="150px"
            width="300px"
          />
          <pre className="speech-bubble">
            <b>AGH!</b> How did you get here?!{" "}
            <em>Please leave at once.</em> <br />
            <br />
            What's that— what am I doing on this
            laptop? I have no clue. I'm as
            confused as you are. <br />
            <br />
            What's that— did I write Denalia Zhi's
            portfolio site? Of course not! I'm
            just a squirrel. What do I know? I'm
            just a squirrel...
          </pre>
        </div>
        <h1>Oops! Page not found</h1>
      </main>
      <Footer />
    </>
  );
}
