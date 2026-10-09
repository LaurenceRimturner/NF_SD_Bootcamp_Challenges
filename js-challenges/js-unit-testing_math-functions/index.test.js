import { add, divide, multiply, subtract } from ".";

test("Return 5 then", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("negativ value", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});
test("close to 0.3", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("return 10 with 15,5", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("negativ value if second larger then first", () => {
  const result = subtract(0, 1);
  expect(result).toBeLessThan(0);
});

test("return multiply 2,4 to 8", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("return negativ val if first negativ", () => {
  const result = multiply(-1, 1);
  expect(result).toBeLessThan(0);
});
test("return negativ val if second negativ", () => {
  const result = multiply(1, -1);
  expect(result).toBeLessThan(0);
});
test("return negativ val if both negativ", () => {
  const result = multiply(-1, -1);
  expect(result).toBeGreaterThan(0);
});

test("return multiply 3,9 to 3", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("div by 0 error text", () => {
  const result = divide(0, 0);
  expect(result).toBe("You should not do this!");
});
