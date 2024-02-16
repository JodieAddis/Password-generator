export const strengthLevel = (count: number): void => {
  const strength = document.querySelector("#strengthLevel") as HTMLSpanElement;
  const wrapper = document.querySelector(".wrapper") as HTMLDivElement;

  wrapper.classList.remove("too_weak");
  wrapper.classList.remove("weak");
  wrapper.classList.remove("medium");
  wrapper.classList.remove("strong");

  switch (count) {
    case 1:
      strength.innerHTML = "too weak !";
      wrapper.classList.add("too_weak");
      break;
    case 2:
      strength.innerHTML = "weak";
      wrapper.classList.add("weak");
      break;
    case 3:
      strength.innerHTML = "medium";
      wrapper.classList.add("medium");
      break;
    case 4:
      strength.innerHTML = "strong";
      wrapper.classList.add("strong");
      break;
  }
};
