/**
 * Function that copies the generated password and stores it in an HTML element.
 * @param {String} password - Contains the generated password.
 */
export const clipboardText = (password) => {
  const copiedText = document.querySelector("#copiedText");
  const copyBtn = document.querySelector("#copyBtn");
  //const test = "test de copie";
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(password);
    copiedText.innerHTML = "Copied";
  });
};
