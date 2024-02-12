export const currentLength = (): void => {
  const inputLength = document.querySelector(
    "#password-length",
  ) as HTMLInputElement;
  const lengthDisplay = document.querySelector("#lengthDisplay") as HTMLElement;

  const updateLengthValue = () => {
    lengthDisplay.textContent = inputLength.value;
  };
  inputLength.addEventListener("input", () => {
    updateLengthValue();
  });
  updateLengthValue();
};
