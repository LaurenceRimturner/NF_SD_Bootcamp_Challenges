console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const res = await fetch(url);
  const data = await res.json();
  const r2d2 = data.results.find((person) => person.name === "R2-D2");
  console.log(r2d2.eye_color);
  return data;
}

fetchData();
