import "./styles.css";
import Counter from "./components/Counter";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <Counter
      onDecrement={handleDecrement}
      onIncrement={handleIncrement}
      count={count}
    />
  );
}
