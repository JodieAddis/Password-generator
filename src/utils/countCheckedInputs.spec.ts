import { describe, it, expect } from "vitest";
import { countCheckedInputs } from "./countCheckedInputs";

describe("strengthLevel Unit Test Suite", () => {
  it("should return something", () => {
    expect(countCheckedInputs("gqgcgfznlx")).toBeDefined();
  });
  it("should return 1", () => {
    expect(countCheckedInputs("gqgcgfznlx")).toBe(1);
  });
  it("should return 1", () => {
    expect(countCheckedInputs("HTQYSTCKNF")).toBe(1);
  });
  it("should return 1", () => {
    expect(countCheckedInputs("8628445976")).toBe(1);
  });
  it("should return 1", () => {
    expect(countCheckedInputs("^)^&^!^&*)")).toBe(1);
  });
  it("should return 2", () => {
    expect(countCheckedInputs("MdampZhLLe")).toBe(2);
  });
  it("should return 3", () => {
    expect(countCheckedInputs("wg6BPPYq0t")).toBe(3);
  });
  it("should return 4", () => {
    expect(countCheckedInputs("&E!@Zr8iyv")).toBe(4);
  });
});
