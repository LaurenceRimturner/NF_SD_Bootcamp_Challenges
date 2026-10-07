import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value.toLowerCase();

  // const foundCountry = countries.find((country) =>
  //   country.name.toLowerCase().startsWith(searchString),
  // );

  // if (foundCountry) {
  //   const countryElement = Country(foundCountry);
  //   container.append(countryElement);
  // }

  const foundCountries = countries.filter((country) =>
    country.name.toLowerCase().startsWith(searchString),
  );
  foundCountries.forEach((country) => {
    const countryElement = Country(country);
    container.append(countryElement);
  });
});
