/**
 * Fonction qui génère mdp
 * @param {Number} length - Number that define the length of the password
 * @param {boolean} hasLowerCase - Minuscule dans le mdp
 * @param {boolean} hasUpperCase - Majuscule dans le mdp
 * @param {boolean} hasNumber - Chiffres dans le mdp
 * @param {boolean} hasSymbols - Symbols dans le mdp
 * @returns MDP
 */
export const generatePassword = (
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