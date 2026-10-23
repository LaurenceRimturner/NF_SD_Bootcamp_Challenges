// Step 1: Predict the type of each variable below. Write your prediction into the comment,
// THEN hover over the variable in your editor and compare. Mark every wrong prediction with ❌ and think about why.

let city = "Berlin"; // Prediction: string
let population = 3_700_000; // Prediction: number
let isCapital = true; // Prediction: boolean
const hobbies = ["climbing", "reading"]; // Prediction: string[]
const grades = [1, 3, 2]; // Prediction: number[]
const student = { name: "Max", age: 22 }; // Prediction: {name: string, age: number}

// Step 2: TypeScript also infers types for values that are calculated from other variables. Predict these as well.

const firstHobby = hobbies[0]; // Prediction: string (Elementtyp von string[], unabhängig vom Index)
const gradeCount = grades.length; // Prediction: number
const shout = city.toUpperCase(); // Prediction: string

// Step 3: These two lines look almost the same. Predict their types, then hover. Why are they different?

const language = "TypeScript"; // Prediction: Typescript
let framework = "React"; // Prediction: string

// Step 4: This array may surprise you. Predict its type, then hover.
// Don't worry about the `|` yet: you will learn its name in the next session.

const mixed = [1, "two", 3]; // Prediction: number|string[] ❌ (string|number)[]

// Step 5: Which of these lines cause an error? Write "error" or "ok" behind each line.
// Then remove the `//` of one line after the other and check your prediction. Read every error message.
// Comment the line out again afterwards.

// city = 42; // Prediction: ❌ string
// city = "Hamburg"; // Prediction: ✔
// hobbies.push(3); // Prediction: ❌ keine Zahl in string Array
// grades[0] = "A"; // Prediction: ❌ keine String in number Array
// student.age = "23"; // Prediction: ❌
// student.email = "max@example.com"; // Prediction: ❌
// language = "JavaScript"; // Prediction: ❌
// framework = "Vue"; // Prediction: ✔
// mixed.push(true); // Prediction: ❌ (string|number|boolean)[]

// Step 6: Create an empty array `tags` that may only hold strings.
// Make sure that `tags.push(1)` is an error. Remove the line again afterwards.
let tags: string[] = [];

// Question: Compared to `hobbies`, which part of the code did you have to add for `tags`? Why can't TypeScript infer it here?
// Answer: For tags, I had to add the type annotation : string[]. TypeScript can’t infer the type because the array is empty, so there are no values to infer it from.

// Question: When can you leave out a type annotation, and when do you need one?
// Answer: You can leave out a type annotation when you assign a value right away, because TypeScript figures out the type from it. You need one when there’s no value to go on, like an empty array or a function parameter.
