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
  if (count == 1) {
    console.log("Too weak !");
    //designer le container et designer les enfants
    strength.innerHTML = "too weak !";
    strengthContainer.classList.add("too_weak");
  } else if (count == 2) {
    strength.innerHTML = "weak";
    strengthContainer.classList.add("weak");
  } else if (count == 3) {
    strength.innerHTML = "medium";
    strengthContainer.classList.add("medium");
  } else if (count == 4) {
    //designer strentgh directement
    strength.innerHTML = "strong";
    strengthDisplay.classList.add("strong");
  }
};
