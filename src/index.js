/**
 * Fonction qui génère mdp
 * @param {Number} length - Taille du mdp
 * @param {boolean} hasLowerCase - Minuscule dans le mdp
 * @param {boolean} hasUpperCase - Majuscule dans le mdp
 * @returns MDP
 */
export const generateString = (length, hasLowerCase, hasUpperCase) => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let letters = "";

  if (hasLowerCase) letters += lowercase;
  if (hasUpperCase) letters += uppercase;

  const charactersLength = letters.length;

  for (let i = 0; i < length; i++) {
    result += letters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

console.log(generateString(10, true, true));
