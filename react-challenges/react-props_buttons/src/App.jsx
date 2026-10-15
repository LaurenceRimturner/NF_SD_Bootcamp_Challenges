export default function App() {
  return (
    <>
      <Button
        text="Click this Btn"
        color="green"
        disable={false}
        onHandleClick={handleClick}
      />
      <Button text="DONT Click this btn" color="red" disable={true} />
      <Button
        text="This is Btn"
        color="blue"
        disable={false}
        onHandleClick={handleClick2}
      />
    </>
  );
}
function handleClick() {
  return alert("You clicked me!");
}
function handleClick2() {
  return alert("Was ein Bums!");
}

function Button({ color, disable, text, onHandleClick }) {
  return (
    <button onClick={onHandleClick} style={{ color: color }} disabled={disable}>
      {text}
    </button>
  );
}
