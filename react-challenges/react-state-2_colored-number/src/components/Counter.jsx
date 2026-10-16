import ColoredNumber from "./ColoredNumber";

export default function Counter({ onIncrement, onDecrement, count }) {
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => onIncrement()}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => onDecrement()}
        >
          -
        </button>
      </div>
    </div>
  );
}
