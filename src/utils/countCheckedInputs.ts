export const countCheckedInputs = (password: string): number => {
  let count = 0;
  if (password.match(/[a-z]+/)) {
    count += 1;
  }
  if (password.match(/[A-Z]+/)) {
    count += 1;
  }
  if (password.match(/[0-9]+/)) {
    count += 1;
  }
  if (password.match(/[!@#$%^&*()]+/)) {
    count += 1;
  }
  return count;
};
