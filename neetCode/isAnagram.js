const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const countLetters = {};

  for (let i of s) {
    if (!(i in countLetters)) countLetters[i] = 0;
    countLetters[i] += 1;
  }

  for (let i of t) {
    if (!(i in countLetters)) return false;
    countLetters[i] -= 1;
  }

  for  (let i in countLetters) {
    if (countLetters[i] !== 0) return false
  }

  return true;
}

console.log(isAnagram('car', 'auc'));