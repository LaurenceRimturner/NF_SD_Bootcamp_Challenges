import type { Grade, Student } from "./types";

// Step 1: Function type
// a) Create a type alias `MathOperation` for a function that takes two numbers
//    and returns a number.
// b) Use `MathOperation` to write `subtract` and `multiply` as arrow functions.
//    Hover over the parameters: which type do they have?
// c) Call both functions and log the results.

type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;
console.log(subtract(2, 5));
console.log(multiply(5, 10));

// Step 2: Add an exam grade
// a) Create a student `anton` of the type `Student` with some example grades.
// b) Write a function `addExam(student: Student, grade: Grade): boolean`.
// c) It adds the grade to the student's grades and returns `true`.
// d) Call `addExam` with a valid grade and log the result.
// e) Try to call `addExam` with the grade 7. What happens? Read the error message
//    and remove the line again.
// f) Optional: Types only exist while you write code. If the grade came from a form
//    at runtime, it could still be invalid. Check if the grade is valid anyway
//    and return `false` without adding it if it isn't.

const anton: Student = {
  firstName: "Artyom",
  lastName: "Alekseyevich Chyornyj",
  age: 35,
  grades: [
    3,
    1,
    undefined,
    4,
    "B",
    undefined,
    "A",
    4,
    2,
    3,
    1,
    2,
    4,
    5,
    2,
    undefined,
  ],
};

function addExam(student: Student, grade: Grade): boolean {
  student.grades.push(grade);
  return true;
}
console.log(addExam(anton, 1));

// Step 3: Typed array methods
// a) Create an array of numbers and use `.map` to double them.
// b) Create an array of words and use `.filter` to keep the words with more than 5 letters.
// c) Hover over both results: which types does TypeScript infer?
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const words = ["apple", "banana", "cherry", "fig", "elderberry"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords);

// Bonus: Calculate the average
// a) Write a function `getAverage(grades: (Grade | undefined)[]): number | undefined`.
// b) It only uses the number grades (ignore letters and missing grades)
//    and returns their average.
// c) If there are no number grades, it returns `undefined`.
// d) Test it with `anton.grades` and with an array that only contains letters.

function getAverage(grades: (Grade | undefined)[]): number | undefined {
  const numbers = grades.filter((grade) => typeof grade === "number");

  if (numbers.length === 0) {
    return undefined;
  }

  const sum = numbers.reduce((total, current) => total + current, 0);
  return sum / numbers.length;
}
console.log(getAverage(anton.grades));
