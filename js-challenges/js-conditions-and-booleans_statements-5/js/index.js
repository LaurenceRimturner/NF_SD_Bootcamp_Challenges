console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword !== SUPER_SECRET_PASSWORD) {
  console.log("Access denied!");
} else {
  console.log("Welcome! You are logged in as Brunhilde1984.");
}

// Part 2: Even / Odd
const number = 6;
const isEven = number % 2 === 0;

if (isEven) {
  console.log(number + " is Even");
} else {
  console.log(number + " is Odd");
}

// Part 3: Hotdogs
// < 5 = 2 Euro per HD
// = 5 < 100 = 1.50 per HD
// = 100 < 1 000 000 = 0.10 euro
const numberOfHotdogs = 60;
let totalPrice = numberOfHotdogs;

if (numberOfHotdogs < 5) {
  totalPrice = numberOfHotdogs * 2;
} else if (numberOfHotdogs < 100) {
  totalPrice = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs < 1_000_000) {
  totalPrice = numberOfHotdogs * 1;
} else {
  totalPrice = numberOfHotdogs * 0.1;
}

console.log(totalPrice);

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const name = userName === "Klaus" ? "Coach" : userName;

const greeting = "Hello " + name + "!";

console.log(greeting);
