// Step 1: Write a function `greet` with the `function` keyword.
// It takes a `name` (string) and returns a greeting (string), for example "Hello, Anna!".
// Type the parameter and the return value. Call the function and log the result.
function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Anna"));

// Step 2: Write a function `isAdult` that takes an `age` (number) and returns a boolean:
// `true` if the age is 18 or more. Type the parameter and the return value.
// Call it with 17 and with 18 and log both results.

function isAdult(age: number): boolean {
  return age >= 18 ? true : false;
}

console.log(isAdult(17));
console.log(isAdult(18));

// Step 3: Write a function `printFullName` that takes a `firstName` and a `lastName` (both strings)
// and prints them to the console, for example "Anna Meier". The function doesn't return anything.
// Type both parameters. Which return type do you have to write? Hover over the function name to check.

function printFullName(firstName: string, lastName: string): void {
  console.log(`${firstName} ${lastName}`);
}
printFullName("Anna", "Meier");

// Step 4: Write a function `double` as an arrow function and store it in a constant.
// It takes a number and returns it multiplied by two.
// Type the parameter and the return value. Call it and log the result.

const double = (number: number) => {
  return number * 2;
};

console.log(double(2));

// Step 5: Break it on purpose. Try each of the following one after the other.
// Read every error message completely and undo the change afterwards.
// a) Call `double("5")`. String as typed number
// b) Call `printFullName("Anna")`. 2 arguments needed
// c) Call `greet("Anna", "Ben")`. only 1 arguments needed
// d) Change `greet` so that it returns the number 42 instead of a string. chage type of name

// Step 6: TypeScript can guess some types on its own.
// a) Remove the return type from `isAdult`. Hover over the function name: Which return type does TypeScript infer? // Still boolean
// b) Put the return type back. Now remove the type from the parameter `age`. What does TypeScript say? // Any
// c) Put the parameter type back.
//
// Question: Which types does TypeScript guess for you, and which types do you always have to write yourself?
// Answer: Typescript guesses defined variables, returns. Functioparameter, empty arrays and variables
