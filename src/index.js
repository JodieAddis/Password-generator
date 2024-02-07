import { generatePassword } from "./utils/generatePassword.js";

const handleSubmit = () => {
  const lowercaseChecked = document.getElementById("password-lowercase");
  const uppercaseChecked = document.getElementById("password-uppercase");
  const numbersChecked = document.getElementById("password-numbers");
  console.log(numbersChecked);
  const symbolsChecked = document.getElementById("password-symbols");
  const form = document.querySelector(".form");
  const displayPassword = document.querySelector("#display-password");

  const copyPassword = document.querySelector("#copiedText");
  const copyBtn = document.querySelector("#copyText");

  const handleCreatePassword = (e) => {
    e.preventDefault();
    const password = generatePassword(
      10,
      lowercaseChecked.checked,
      uppercaseChecked.checked,
      numbersChecked.checked,
      symbolsChecked.checked,
    );
    console.log(password);
    displayPassword.innerHTML = password;
  };
  const clipboardText = (password) => {
    navigator.clipboard.writeText(password.value);
    alert("Copied password is: " + password.value);
  };

  form.addEventListener("submit", handleCreatePassword);
  copyBtn.addEventListener("click", clipboardText);
};

handleSubmit();
