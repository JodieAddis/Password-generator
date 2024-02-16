import { clipboardText } from "./utils/clipboardText.js";
import { countCheckedInputs } from "./utils/countCheckedInputs.js";
import { currentLength } from "./utils/currentLength.js";
import { generatePassword } from "./utils/generatePassword.js";
import { strengthLevel } from "./utils/strengthLevel.js";

const handleSubmit = () => {
  const lowercaseChecked = document.getElementById(
    "password-lowercase",
  ) as HTMLInputElement;
  const uppercaseChecked = document.getElementById(
    "password-uppercase",
  ) as HTMLInputElement;
  const numbersChecked = document.getElementById(
    "password-numbers",
  ) as HTMLInputElement;
  const symbolsChecked = document.getElementById(
    "password-symbols",
  ) as HTMLInputElement;
  const form = document.querySelector(".form");
  const displayPassword = document.querySelector(
    "#display-password",
  ) as HTMLElement;
  const passwordLength = document.querySelector(
    "#password-length",
  ) as HTMLInputElement;
  const allCheckbox = document.querySelectorAll(".input_checkbox");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (
        passwordLength &&
        lowercaseChecked &&
        uppercaseChecked &&
        numbersChecked &&
        symbolsChecked
      ) {
        const password = generatePassword(
          Number(passwordLength.value),
          lowercaseChecked.checked,
          uppercaseChecked.checked,
          numbersChecked.checked,
          symbolsChecked.checked,
        );
        displayPassword.innerHTML = password;
        clipboardText(password);
        const count = countCheckedInputs(password);
        strengthLevel(count);
      }
    });
  }
  currentLength();
};

handleSubmit();
