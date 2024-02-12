import { generatePassword } from "./utils/generatePassword.js";
import { clipboardText } from "./utils/clipboardText.js";
import { currentLength } from "./utils/currentLength.js";
import { passwordStrength } from "./utils/passwordStrength.js";

const handleSubmit = () => {
  const lowercaseChecked = document.getElementById("password-lowercase");
  const uppercaseChecked = document.getElementById("password-uppercase");
  const numbersChecked = document.getElementById("password-numbers");
  const symbolsChecked = document.getElementById("password-symbols");
  const form = document.querySelector(".form");
  const displayPassword = document.querySelector(
    "#display-password",
  ) as HTMLElement;
  const passwordLength = (
    document.querySelector("#password-length") as HTMLInputElement
  ).value;
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
          //passwordLength.value,
          passwordLength,
          lowercaseChecked.checked,
          uppercaseChecked.checked,
          numbersChecked.checked,
          symbolsChecked.checked,
        );
        displayPassword.innerHTML = password;
        clipboardText(password);
      }
    });
  }

  currentLength();

  allCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      passwordStrength();
    });
  });
};

handleSubmit();
