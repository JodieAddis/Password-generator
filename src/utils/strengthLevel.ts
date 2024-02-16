export const strengthLevel = (count: number): void => {
  const strength = document.querySelector("#strengthLevel") as HTMLInputElement;
  const strengthDisplay = document.querySelector(".strength") as HTMLElement;
  const strengthContainer = document.querySelector(
    ".strength_container",
  ) as HTMLElement;

  strengthContainer.classList.remove("too_weak");
  strengthContainer.classList.remove("weak");
  strengthContainer.classList.remove("medium");
  strengthContainer.classList.remove("strong");
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
