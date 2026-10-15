import Card from "./components/Card";

export default function App() {
  function Fruits() {
    const fruits = [
      {
        id: 1,
        name: "🍌 Banana",
        color: "yellow",
      },
      {
        id: 2,
        name: "🍎 Apple",
        color: "red",
      },
      {
        id: 3,
        name: "🍇 Grapes",
        color: "purple",
      },
      {
        id: 4,
        name: "🍊 Orange",
        color: "orange",
      },
      {
        id: 5,
        name: "🥝 Kiwi",
        color: "green",
      },
    ];

    return fruits.map((fruit) => (
      <Card key={fruit.id} name={fruit.name} color={fruit.color}></Card>
    ));
  }

  return (
    <div className="app">
      <Fruits />
    </div>
  );
}
