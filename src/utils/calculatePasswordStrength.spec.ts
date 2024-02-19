import { describe, it, expect } from "vitest";
import { calculatePasswordStrength } from "./calculatePasswordStrength";

describe("strengthLevel Unit Test Suite", () => {
  it("should return something", () => {
    expect(calculatePasswordStrength("gqgcgfznlx")).toBeDefined();
  });
  it("should return 1", () => {
    expect(calculatePasswordStrength("gqgcgfznlx")).toBe(1);
    expect(calculatePasswordStrength("HTQYSTCKNF")).toBe(1);
    expect(calculatePasswordStrength("8628445976")).toBe(1);
    expect(calculatePasswordStrength("^)^&^!^&*)")).toBe(1);
  });

  it("should return 2", () => {
    expect(calculatePasswordStrength("MdampZhLLe")).toBe(2);
  });
  it("should return 3", () => {
    expect(calculatePasswordStrength("wg6BPPYq0t")).toBe(3);
  });
  it("should return 4", () => {
    expect(calculatePasswordStrength("&E!@Zr8iyv")).toBe(4);
  });
});
