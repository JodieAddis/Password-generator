/*
export const passwordStrength = (): void => {
  const inputCheckbox = document.querySelectorAll(
    ".input_checkbox",
  ) as NodeListOf<HTMLInputElement>;
  const strength = document.querySelector("#strengthLevel") as HTMLInputElement;
  const strengthDisplay = document.querySelector(".strength") as HTMLElement;
  const strengthContainer = document.querySelector(
    ".strength_container",
  ) as HTMLElement;

  let count = 0;

  for (let i = 0; i < inputCheckbox.length; i++) {
    if (inputCheckbox[i].checked == true) {
      count++;
      console.log(count);
    }
  }
  strengthContainer.classList.remove(
    "strength_container",
    "too_weak",
    "weak",
    "medium",
  );
  strengthDisplay.classList.remove("strength");
  switch (count) {
    case 1:
      strength.innerHTML = "too weak !";
      strengthContainer.classList.add("too_weak");
      break;
    case 2:
      strength.innerHTML = "weak";
      strengthContainer.classList.add("weak");
      break;
    case 3:
      strength.innerHTML = "medium";
      strengthContainer.classList.add("medium");
      break;
    case 4:
      strength.innerHTML = "strong";
      strengthDisplay.classList.add("strong");
      break;
  }
};
*/

export const getInputElements = (): {
  inputCheckbox: NodeListOf<HTMLInputElement>;
  strength: HTMLInputElement;
  strengthDisplay: HTMLElement;
  strengthContainer: HTMLElement;
} => {
  const inputCheckbox = document.querySelectorAll(
    ".input_checkbox",
  ) as NodeListOf<HTMLInputElement>;
  const strength = document.querySelector("#strengthLevel") as HTMLInputElement;
  const strengthDisplay = document.querySelector(".strength") as HTMLElement;
  const strengthContainer = document.querySelector(
    ".strength_container",
  ) as HTMLElement;

  return { inputCheckbox, strength, strengthDisplay, strengthContainer };
};

export const countCheckedInputs = (
  inputCheckbox: HTMLInputElement[],
): number => {
  let count = 0;

  for (let i = 0; i < inputCheckbox.length; i++) {
    if (inputCheckbox[i].checked == true) {
      count++;
      console.log(count);
    }
  }
  return count;
};

export const strengthLevel = (
  count: number,
  strength: HTMLSpanElement,
  strengthContainer: HTMLElement,
  strengthDisplay: HTMLElement,
): void => {
  switch (count) {
    case 1:
      strength.innerHTML = "too weak !";
      strengthContainer.classList.add("too_weak");
      break;
    case 2:
      strength.innerHTML = "weak";
      strengthContainer.classList.add("weak");
      break;
    case 3:
      strength.innerHTML = "medium";
      strengthContainer.classList.add("medium");
      break;
    case 4:
      strength.innerHTML = "strong";
      strengthDisplay.classList.add("strong");
      break;
  }
};
