import { describe, it, expect } from "vitest";
import { generatePassword } from "./index.js";

describe("GenerateString Suite Unit Test", () => {
  it("should be return something", () => {
    expect(generatePassword(10, true, true, true, true)).toBeDefined();
  });

  it("should be return a string", () => {
    const length = 10;
    expect(typeof generatePassword(length, true, true, true, true)).toBe(
      "string",
    );
  });

  it("should be return a length of 10 characters", () => {
    expect(generatePassword(10, true, true, true, true).length).toEqual(10);
  });

  it("should return only lowercase", () => {
    const password = generatePassword(10, true, false, false, false);
    const re = /^[a-z]+$/;
    expect(re.test(password)).toBe(true);
  });

  it("should return only uppercase", () => {
    const password = generatePassword(10, false, true, false, false);
    const re = /^[A-Z]+$/;
    expect(re.test(password)).toBe(true);
  });

  it("should return a password with lowercase and uppercase", () => {
    const password = generatePassword(10, true, true, false, false);
    console.log(password);
    const re = /^[a-zA-Z]+$/;
    expect(re.test(password)).toBe(true);
  });

  it("should return only numbers", () => {
    const password = generatePassword(10, false, false, true, false);
    const re = /^[0-9]+$/;
    expect(re.test(password)).toBe(true);
  });

  it("slould return only symbols", () => {
    const password = generatePassword(10, false, false, false, true);
    const re = /^[!@#$%^&*()]+$/;
    expect(re.test(password)).toBe(true);
  });

  it("slould return a password with nmbers and symbols", () => {
    const password = generatePassword(10, false, false, true, true);
    const re = /^[0-9!@#$%^&*()]+$/;
    expect(re.test(password)).toBe(true);
  });

  it("should return a password with lowercase, uppercase and numbers", () => {
    const password = generatePassword(10, true, true, true, false);
    console.log(password);
    const re = /^[a-zA-Z0-9]+$/;
    expect(re.test(password)).toBe(true);
  });

  it("should return a password with all characters", () => {
    const password = generatePassword(10, true, true, true, true);
    console.log(password);
    const re = /^[a-zA-Z0-9!@#$%^&*()]+$/;
    expect(re.test(password)).toBe(true);
  });
});
