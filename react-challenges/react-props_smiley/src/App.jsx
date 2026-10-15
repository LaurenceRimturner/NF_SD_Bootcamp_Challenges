export default function App() {
  return <Smiley isHappy={false} />;
}

function Smiley({ isHappy }) {
  return isHappy ? <h1>:)</h1> : <h1>:(</h1>;
}
