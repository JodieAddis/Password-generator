function generateString(length, hasLowercase, hasUppercase) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = " ";
  let letters = " ";
  const charactersLength = letters.length;

  if (hasLowercase) {
    letters += lowercase;
  }

  if (hasUppercase) {
    letters += uppercase;
  }

  for (let i = 0; i < length; i++) {
    result += letters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

console.log(generateString(5, true));
