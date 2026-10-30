import { describe, expect, test } from "vitest";
import { assertValidPassword, validatePassword } from "./validatePassword";

describe("validatePassword", () => {
  test("returns an empty array for a valid password", () => {
    expect(validatePassword("Secret123")).toEqual([]);
  });

  test("reports a password that is too short", () => {
    const errors = validatePassword("Ab1");

    expect(errors).toContain("Password must have at least 8 characters");
  });

  test("accepts a password with exactly 8 characters", () => {
    expect(validatePassword("Abcdef12")).toEqual([]);
  });

  test.each([
    {
      errors: "",
      expected: "Password must contain a digit",
      rules: "password without a digit",
    },
    {
      errors: "lowercase",
      expected: "Password must contain an uppercase letter",
      rules: "password without an uppercase letter",
    },
    {
      errors: "a b",
      expected: "Password must not contain spaces",
      rules: "password with a space",
    },
  ])(`reports errors that break the rules $rules`, ({ errors, expected }) => {
    expect(validatePassword(errors)).toContain(expected);
  });

  test("reports a password without a digit", () => {
    const errors = validatePassword("");
    expect(errors).toContain("Password must contain a digit");
  });

  test("reports a password without an uppercase letter", () => {
    const errors = validatePassword("lowercase");
    expect(errors).toContain("Password must contain an uppercase letter");
  });

  test("reports a password with a space", () => {
    const errors = validatePassword("a b");
    expect(errors).toContain("Password must not contain spaces");
  });

  test("returns all errors at once for a password that breaks every rule", () => {
    const errors = validatePassword("a b");
    expect(errors).toHaveLength(4);
  });
});

describe("assertValidPassword", () => {
  test("does not throw for a valid password", () => {
    expect(() => assertValidPassword("Secret123abc")).not.toThrow();
  });

  test("throws an error that lists the broken rules", () => {
    expect(() => assertValidPassword("a b")).toThrow(
      "Password must have at least 8 characters, Password must contain a digit, Password must contain an uppercase letter",
    );
  });
});
