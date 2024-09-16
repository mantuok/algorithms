const isAnagram = (s ,t) => {
  const letters = {};

  for (let letter of s) {
    if (!(letter in letters)) letters[letter] = 0;
    letters[letter] += 1;
  }

  for (let letter of t) {
    if (!(letter in letters)) return false;
    letters[letter] -= 1;
  }

  for (let letter in letters) {
    if (letters[letter] != 0) return false;
  }

  return true;
}