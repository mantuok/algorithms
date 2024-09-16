// const mostFrequentChar = (s) => {
//   let charCount = {};
//   let maxCount = 0;
//   let result = '';

//   for (let char of s) {
//     if (!(char in charCount)) {
//       charCount[char] = 0;
//     }
//     charCount[char] += 1;
//   }

//   for (let char in charCount) {
//     if (charCount[char] > maxCount) {
//       maxCount = charCount[char];
//       result = char;
//     }
//   }
//   return result;
// };

const mostFrequentChar = (s) => {
  let charCount = {};
  let result = null;

  for (let char of s) {
    if (!(char in charCount)) {
      charCount[char] = 0;
    }
    charCount[char] += 1;
  }

  for (let char of s) {
    if (
        result === null ||
        charCount[char] > charCount[result]
        ) {
      result = char;
    }
  }
  return result;
};

console.log(mostFrequentChar('boookeeper'));