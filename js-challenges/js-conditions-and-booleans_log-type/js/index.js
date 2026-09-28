const data = NaN;

switch (true) {
  case Array.isArray(data):
    console.log("It is array");
    break;
  case typeof data === "undefined":
    console.log("It is undefined");
    break;
  case data === null:
    console.log("It is null");
    break;
  case typeof data === "number":
    console.log("It is a number");
    break;
  case Number.isNaN(data):
    console.log("It is NaN");
    break;
  case typeof data === "string":
    console.log("It is a string");
    break;
  case typeof data === "boolean":
    console.log("It is a boolean");
    break;
  case typeof data === "function":
    console.log("It is a function");
    break;
  case typeof data === "object":
    console.log("It is object");
    break;
  default:
    console.log("I have no idea!");
    break;
}

// WOHER SOLL MAN DAS DENN WISSEN?????
