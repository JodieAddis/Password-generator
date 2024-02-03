import { describe, it, expect } from "vitest";
import { HelloWorld } from "./HelloWorld.js";

describe("HelloWord Suite Unit Test ", () => {
  it("should be return something", () => {
    expect(HelloWorld("Jodie")).toBeDefined();
  });

  it("should be return a string", () => {
    expect(typeof HelloWorld("Jodie")).toBe("string");
  });

  it("should not be return a boolean", () => {
    expect(typeof HelloWorld("Jodie")).not.toBe("boolean");
  });

  it("should be return 'hey, Jodie, have a good day!' ", () => {
    expect(HelloWorld("Jodie")).toBe("hey, Jodie, have a good day!");
  });
});
