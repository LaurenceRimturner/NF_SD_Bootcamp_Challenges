// Step 1: Declare a variable `age` with `let` and the type `number`, and give it a value.
let age: number = 10;

// Step 2: Declare a variable `score` with `let` and the type `number`, with the value 0.
let score: number = 0;

// Step 3: Declare a variable `username` with `const` and the type `string`, with the value "Alex".
const username: string = "Alex";
// Step 4: Declare a variable `isAdmin` with `const` and the type `boolean`, with the value false.
const isAdmin: boolean = false;
// Step 5: Print all values to the console, e.g. "age: 25".
console.log(age);
console.log(score);
console.log(username);
console.log(isAdmin);

// Step 6: Try to assign a string to `age`. Read the error message, then remove the line again.
// age = "alex"; "Type 'string' is not assignable to type 'number'.",

// Step 7: Declare a variable `level` with `let` and the value 1, but WITHOUT a type annotation.
let level = 1;
// Hover over `level` in your editor: which type does TypeScript infer?
// level = number;

// Then try to assign "high" to `level`. Read the error message, then remove the line again.
// level = "high"; Type 'string' is not assignable to type 'number'.
