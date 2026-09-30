console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const formElements = event.target.elements;
  const currValueNbrA = Number(formElements.numberA.value);
  const currValueNbrB = Number(formElements.numberB.value);
  const operatorValue = formElements.operator.value;

  switch (operatorValue) {
    case "addition":
      result = add(currValueNbrA, currValueNbrB);
      break;
    case "subtraction":
      result = subtract(currValueNbrA, currValueNbrB);
      break;
    case "multiplication":
      result = multiply(currValueNbrA, currValueNbrB);
      break;
    case "division":
      result = divide(currValueNbrA, currValueNbrB);
      break;
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
