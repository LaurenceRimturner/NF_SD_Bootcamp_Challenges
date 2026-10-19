import { useState } from "react";
import Character from "./components/Character";
import Layout from "./components/Layout";
import "./styles.css";

export default function App() {
  const [characterIds, setcharacterIds] = useState(1);
  // () => setcharacterIds(1) ohne Function // war nicht falsch aber besser wenn Inline
  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <ul className="characters">
        <li>
          <button type="button" onClick={() => setcharacterIds(1)}>
            Luke Skywalker
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setcharacterIds(2)}>
            C-3PO
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setcharacterIds(3)}>
            R2-D2
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setcharacterIds(4)}>
            Darth Vader
          </button>
        </li>
      </ul>
      <Character id={characterIds} />
    </Layout>
  );
}
