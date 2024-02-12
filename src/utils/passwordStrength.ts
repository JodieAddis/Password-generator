export const passwordStrength = (): void => {
  const inputCheckbox = document.querySelectorAll(
    ".input_checkbox",
  ) as NodeListOf<HTMLInputElement>;
  const strength = document.querySelector("#strengthLevel") as HTMLInputElement;
  const strengthDisplay = document.querySelector(".strength");
  const strengthContainer = document.querySelector(".strength_container");

  let count = 0;

  for (let i = 0; i < inputCheckbox.length; i++) {
    if (inputCheckbox[i].checked == true) {
      count++;
      console.log(count);
      //strength.innerHTML = count;
    }
  }
  if (count == 1) {
    console.log("Too weak !");
    strength.innerHTML = "too weak !";
  } else if (count == 2) {
    strength.innerHTML = "weak";
  } else if (count == 3) {
    strength.innerHTML = "medium";
  } else if (count == 4) {
    strength.innerHTML = "strong";
  }
};
