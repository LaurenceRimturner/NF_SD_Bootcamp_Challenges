export default function App() {
  return <Greetings name="Laureen" />;
}

function Greetings({ name }) {
  return <h1>Hello, {name === "Feline" ? "Coach" : name}!</h1>; // Lösung

  // return name === "Feline" ? <h1>Hello, Coach!</h1> : <h1>Hello, {name}!</h1>; // Gut aber kann besser sein -> DRY.
  // Dynamsiche Lösung Arry mit Namen. isCoach array.includes
}
