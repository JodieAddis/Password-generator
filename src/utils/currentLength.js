export const currentLength = () => {
  const inputLength = document.querySelector("#password-length");
  const lengthDisplay = document.querySelector("#lengthDisplay");

  const updateLengthValue = () => {
    lengthDisplay.textContent = inputLength.value;
  };
  inputLength.addEventListener("input", () => {
    updateLengthValue();
  });
  updateLengthValue();
};
