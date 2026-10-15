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
        name: "🍊 Orange",
        color: "orange",
      },
      {
        id: 4,
        name: "🍉 Watermelon",
        color: "green",
      },
      {
        id: 5,
        name: "🍇 Grapes",
        color: "purple",
      },
      {
        id: 6,
        name: "🍓 Strawberry",
        color: "red",
      },
      {
        id: 7,
        name: "🍍 Pineapple",
        color: "brown",
      },
      {
        id: 8,
        name: "🍋 Lemon",
        color: "yellow",
      },
      {
        id: 9,
        name: "🍒 Cherry",
        color: "red",
      },
      {
        id: 10,
        name: "🥭 Mango",
        color: "orange",
      },
      {
        id: 11,
        name: "🍑 Peach",
        color: "orange",
      },
      {
        id: 12,
        name: "🥝 Kiwi",
        color: "green",
      },
      {
        id: 13,
        name: "🍈 Honeydew",
        color: "green",
      },
      {
        id: 14,
        name: "🥥 Coconut",
        color: "brown",
      },
      {
        id: 15,
        name: "🍆 Eggplant",
        color: "purple",
      },
      {
        id: 16,
        name: "🥑 Avocado",
        color: "green",
      },
      {
        id: 17,
        name: "🥒 Cucumber",
        color: "green",
      },
      {
        id: 18,
        name: "🥦 Broccoli",
        color: "green",
      },
      {
        id: 19,
        name: "🍏 Green Apple",
        color: "green",
      },
      {
        id: 20,
        name: "🍅 Tomato",
        color: "red",
      },
      {
        id: 21,
        name: "🥕 Carrot",
        color: "orange",
      },
      {
        id: 22,
        name: "🥜 Peanut",
        color: "brown",
      },
      {
        id: 23,
        name: "🥔 Potato",
        color: "brown",
      },
      {
        id: 24,
        name: "🍂 Leaf",
        color: "brown",
      },
      {
        id: 25,
        name: "🌽 Corn",
        color: "yellow",
      },
      {
        id: 26,
        name: "🍐 Pear",
        color: "green",
      },
      {
        id: 27,
        name: "🍭 Lollipop",
        color: "rebeccapurple",
      },
      {
        id: 28,
        name: "🍫 Chocolate Bar",
        color: "brown",
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

  // return (
  //   <div className="app">
  //     {fruits.map((fruit) => (
  //       <Card key={fruit.id} name={fruit.name} color={fruit.color} />
  //     ))}
  //   </div>
  // );
}
