import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>
        <p>Children 1</p>
      </Button>
      <Button>
        <h3>Children 2</h3>
      </Button>
      <Button>
        <b>Children 3</b>
      </Button>
      <Button>
        <i>Children 4</i>
      </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
