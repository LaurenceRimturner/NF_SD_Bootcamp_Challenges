// Step 1: Create a `string[]` called `hobbies` with at least three entries.

const hobbies: string[] = ["Gaming", "Reading", "Workout"];

// Step 2: Create a `number[]` called `grades`. Add another grade with `push`.
const grades: number[] = [0, 1, 2, 3, 4];
grades.push(5);

// Step 3: Try to push a string into `grades`. Read the error message, then remove the line again.

// grades.push("Fünf"); Argument of type 'string' is not assignable to parameter of type 'number'.

// Step 4: Create an object `student` with the typed properties

const student: {
  name: string;
  age: number;
  isStudent: boolean;
  grades: number[];
} = {
  name: "Alex",
  age: 30,
  isStudent: true,
  grades: [1, 2, 3, 4],
};
// `name: string`, `age: number`, `isStudent: boolean` and `grades: number[]`.

// Step 5: Print the `name` and the `grades` of `student`.
console.log(student.name, student.grades);

// Step 6: Create an array `students` that holds at least two such student objects.

const students: {
  name: string;
  age: number;
  isStudent: boolean;
  grades: number[];
}[] = [
  { name: "Ingo", age: 60, isStudent: false, grades: [1, 2, 3, 4] },
  { name: "Alexa", age: 25, isStudent: true, grades: [4, 3, 2, 1] },
];

// How would you type it? Which part is annoying to write twice?
