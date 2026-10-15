export default function App() {
  return <Greetings name="Laureen" />;
}

function Greetings({ name }) {
  return name === "Feline" ? <h1>Hello, Coach!</h1> : <h1>Hello, {name}!</h1>;
}
