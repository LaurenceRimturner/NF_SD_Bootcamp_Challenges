console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const add = document.querySelector('[data-js="add"]');
const subtract = document.querySelector('[data-js="subtract"]');
const multiply = document.querySelector('[data-js="multiply"]');
const divide = document.querySelector('[data-js="divide"]');
const exponent = document.querySelector('[data-js="exponent"]');
const modulo = document.querySelector('[data-js="modulo"]');

const incOne = document.querySelector('[data-js="increase-by-one"]');
const incFive = document.querySelector('[data-js="increase-by-five"]');
const decOne = document.querySelector('[data-js="decrease-by-one"]');
const decFive = document.querySelector('[data-js="decrease-by-five"]');
const mulTwo = document.querySelector('[data-js="multiply-by-two"]');
const divTwo = document.querySelector('[data-js="divide-by-two"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
add.addEventListener("click", () => {
  let result = operand1 + operand2;
  console.log(result);
});
subtract.addEventListener("click", () => {
  let result = operand1 - operand2;
  console.log(result);
});
multiply.addEventListener("click", () => {
  let result = operand1 * operand2;
  console.log(result);
});
divide.addEventListener("click", () => {
  let result = operand1 / operand2;
  console.log(result);
});
exponent.addEventListener("click", () => {
  let result = operand1 ** operand2;
  console.log(result);
});
modulo.addEventListener("click", () => {
  let result = operand1 % operand2;
  console.log(result);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
incOne.addEventListener("click", () => {
  operand1 += 1;
  console.log(operand1);
});
incFive.addEventListener("click", () => {
  operand1 += 5;
  console.log(operand1);
});
decOne.addEventListener("click", () => {
  operand1 -= 1;
  console.log(operand1);
});
decFive.addEventListener("click", () => {
  operand1 -= 5;
  console.log(operand1);
});
mulTwo.addEventListener("click", () => {
  operand1 *= 2;
  console.log(operand1);
});
divTwo.addEventListener("click", () => {
  operand1 /= 2;
  console.log(operand1);
});
// --^-- write your code here --^--
