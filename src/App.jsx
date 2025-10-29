import { useState } from "react";
import Sample from "./components/Sample";
import "./App.css";

function App() {
  const [heading, setHeading] = useState("Sprinkles");
  return (
    <>
      <h1>{heading}</h1>
      <button
        onClick={() => {
          setHeading("Chocolate");
        }}
      >
        Change
      </button>

      <Sample></Sample>
    </>
  );
}

export default App;
