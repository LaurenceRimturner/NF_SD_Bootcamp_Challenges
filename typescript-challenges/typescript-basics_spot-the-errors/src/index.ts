// Snippet 1
let count: number = 3;
//  ❌ assign string to number

// Snippet 2
const names: string[] = ["Anna", "Ben", "42"];
//  ❌ assign number to stringArray

// Snippet 3
const user: { name: string; age: number; email: string } = {
  name: "Max",
  age: 50,
  email: "e@mail.de",
};
console.log(user.email);
//  ❌ assign no email key to userObject + age is not definded

// Snippet 4
const counter = 0; //undefined: no value assigned
const next = counter + 1;
console.log(next);

//  ❌ undefine is not a number || define immutable

// Question 1: Why would JavaScript not report any of these errors before running the code?
// its only checks syntax and turns things into types
// Typescript strictly checks types

// Question 2: Which of the errors would be the hardest to find in a large JavaScript project?
// Snippet 4, because undefine + 1 is NaN
// it doesnt give error and continue working with wrong Value
