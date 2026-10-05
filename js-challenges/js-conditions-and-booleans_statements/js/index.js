console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD !== receivedPassword) {
  console.log("Wrong PW");
}

// Part 2: Even / Odd
const number = 6;

number % 2 === 0 ? console.log("its even") : console.log("its odd");

// Part 3: Hotdogs
const numberOfHotdogs = 42;

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
