import { describe, it, expect, beforeEach } from "vitest";
import {
  getInputElements,
  countCheckedInputs,
  strengthLevel,
} from "./passwordStrength";

describe("countCheckedInputs Unit Test Suite", () => {
  it("should return something the number of checked checkbox", () => {
    //Simulation de checkbox cochées ou non:
    const inputTest1 = { checked: true } as HTMLInputElement;

    const inputTest2 = { checked: false } as HTMLInputElement;

    const inputTest3 = { checked: true } as HTMLInputElement;

    const result = countCheckedInputs([inputTest1, inputTest2, inputTest3]);

    expect(result).toBe(2);
  });
});

/*
describe("strengthLevel Unit Test Suite", () => {
  it("should return something", () => {
    const strength = {} as HTMLSpanElement;
    const strengthContainer = {} as HTMLElement;
    const strengthDisplay = {} as HTMLElement;

    const result = strengthLevel(
      3,
      strength,
      strengthContainer,
      strengthDisplay,
    );
    expect(result).toBeDefined();
  });
});
*/
