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
  const displayPassword = document.querySelector("#display-password");
  const passwordLength = document.querySelector("#password-length");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = generatePassword(
      passwordLength.value,
      lowercaseChecked.checked,
      uppercaseChecked.checked,
      numbersChecked.checked,
      symbolsChecked.checked,
    );
    displayPassword.innerHTML = password;
    clipboardText(password);
    passwordStrength();
  });
  currentLength();
};

handleSubmit();
