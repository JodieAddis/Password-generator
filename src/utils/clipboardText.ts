export const clipboardText = (password: string): void => {
  const copiedText = document.querySelector("#copiedText") as HTMLElement;
  const copyBtn = document.querySelector("#copyBtn") as HTMLButtonElement;
  const copyIcon = document.querySelector("#copyIcon") as HTMLElement;
  //const test = "test de copie";
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(password);
    copiedText.innerHTML = "Copied";
  });
  setTimeout(() => {
    copiedText.innerHTML = "";
    copyIcon.setAttribute("class", "text-mintGreen");
    //console.log("copied disparait après 5sec");
  }, 5000);
};
