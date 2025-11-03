import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
      </main>
    </>
  );
}
