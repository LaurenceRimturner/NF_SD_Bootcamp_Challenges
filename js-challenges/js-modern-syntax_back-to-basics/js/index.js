/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

// export const getNameAndCountry = ({ name, country }) => [name, country];

// export const getRelocatedCity = (city1,city2 = { name: "Berlin", country: "Germany" }, ) => {
// const [, country] = getNameAndCountry(city2);  return {...city1, country };
// };
export function getNameAndCountry(city) {
  return [city.name, city.country];
}

const city1 = {
  name: "Berlin",
  country: "Germany",
};
const city2 = {
  name: "Berlin",
  country: "Germany",
};

export const getRelocatedCity = (city) => {
  if (!city) {
    getNameAndCountry();
  }
  return;
};

console.log(getNameAndCountry(city1));

//

// export const getNameAndCountry = ({ name, country }) => [name, country];

// export const getRelocatedCity = (
//   city1,
//   city2 = { name: "Berlin", country: "Germany" },
// ) => {
//   const [, country] = getNameAndCountry(city2);
//   return { ...city1, country };
// };
