// const anagrams = (s1, s2) => {
//   if (s1.length !== s2.length) {
//     return false;
//   }

//   const createLettersMap = (s) => {
//     let sLetters = {};
//     for (let i = 0; i < s.length; i++) {
//       if (Object.keys(sLetters).includes(s[i])) {
//         sLetters[s[i]] = sLetters[s[i]] + 1;
//       } else {
//         sLetters[s[i]] = 1;
//       }
//     }
//     return sLetters;
//   }

//   const s1Letters = createLettersMap(s1);
//   const s2Letters = createLettersMap(s2);
//   const s1Keys = Object.keys(s1Letters);

//   for (key of s1Keys) {
//     if (s1Letters[key] !== s2Letters[key]) {
//       return false;
//     }
//   }
//   return true;
// };

const anagrams = (s1, s2) => {
  const s1Letters = {};

  for (let letter of s1) {
    if (!(letter in s1Letters)) {
      s1Letters[letter] = 0;
    }
    s1Letters[letter] += 1;
  }

  for (let letter of s2) {
    if (s1Letters[letter] === undefined) {
      return false;
    } else {
      s1Letters[letter] -= 1;
    }
  }

  for (let letter in s1Letters) {
    if (s1Letters[letter] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(anagrams('restful', 'fluster'));