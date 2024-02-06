import { generatePassword } from "./utils/generatePassword.js";

const handleSubmit = () => {
  const lowercaseChecked =
    document.getElementById("password-lowercase").checked;
  const uppercaseChecked =
    document.getElementById("password-uppercase").checked;
  const numbersChecked = document.getElementById("password-numbers").checked;
  console.log(numbersChecked);
  const symbolsChecked = document.getElementById("password-symbols").checked;
  const form = document.querySelector(".form");
  const displayPassword = document.querySelector("#display-password");
  //console.log(displayPassword);

  const handleCreatePassword = (e) => {
    e.preventDefault();
    const password = generatePassword(
      10,
      lowercaseChecked,
      uppercaseChecked,
      numbersChecked,
      symbolsChecked,
    );
    console.log(password);
    displayPassword.innerHTML = password;
  };
  form.addEventListener("submit", handleCreatePassword);
};

handleSubmit();
