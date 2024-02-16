export const generatePassword = (
  length: number,
  hasLowerCase: boolean,
  hasUpperCase: boolean,
  hasNumbers: boolean,
  hasSymbols: boolean,
): string => {
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
