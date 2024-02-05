/**
 * Fonction qui génère mdp
 * @param {Number} length - Taille du mdp
 * @param {boolean} hasLowerCase - Minuscule dans le mdp
 * @param {boolean} hasUpperCase - Majuscule dans le mdp
 * @param {boolean} hasNumber - Chiffres dans le mdp
 * @param {boolean} hasSymbols - Symbols dans le mdp
 * @returns MDP
 */
export const generateString = (
  length,
  hasLowerCase,
  hasUpperCase,
  hasNumbers,
  hasSymbols,
) => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()";
  let result = "";
  let characters = "";

  if (hasLowerCase) characters += lowercase;
  if (hasUpperCase) characters += uppercase;
  if (hasNumbers) characters += numbers;
  if (hasSymbols) characters += symbols;

  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

//console.log(generateString(10, true, true, true, true));

const lowercase = document.getElementById("password-lowercase");
const uppercase = document.getElementById("password-uppercase");
const numbers = document.getElementById("password-numbers");
const symbols = document.getElementById("password-symbols");

const checkboxIsChecked = () => {
  if (numbers.checked == true) {
    //alert("checkbox checked");
    console.log(generateString(10, false, false, true, false));
  } else if (lowercase.checked == true) {
    console.log(generateString(10, true, false, false, false));
  }
};

lowercase.addEventListener("change", checkboxIsChecked);
uppercase.addEventListener("change", checkboxIsChecked);
numbers.addEventListener("change", checkboxIsChecked);
symbols.addEventListener("change", checkboxIsChecked);
