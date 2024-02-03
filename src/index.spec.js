import { describe, it, expect } from "vitest";
import { generateString } from "./index.js";

describe("GenerateString Suite Unit Test", () => {
  it("should be return something", () => {
    expect(generateString(10, true, true)).toBeDefined();
  });

  it("should be return a string", () => {
    const length = 10;
    expect(typeof generateString(length, true, true)).toBe("string");
  });

  it("should be return a length of 10 characters", () => {
    expect(generateString(10, true, true).length).toEqual(10);
  });

  it("should return only lowercase", () => {
    const password = generateString(10, true, false);
    const re = /^[a-z]+$/;
    expect(re.test(password)).toBe(true);
  });

  it("should return only uppercase", () => {
    const password = generateString(10, false, true);
    const re = /^[A-Z]+$/;
    expect(re.test(password)).toBe(true);
  });

  it("should return a password with lowercase and uppercase", () => {
    const password = generateString(10, true, true);
    console.log(password);
    const re = /^[a-zA-Z]+$/;
    expect(re.test(password)).toBe(true);
  });
});
