// const pairSum = (numbers, targetSum) => {
//   let result = [];
//   for (let i = 0; i < numbers.length; i ++) {
//     for (let j = i + 1; j < numbers.length; j ++) {
//       if (numbers[i] + numbers[j] === targetSum) {
//         result.push(i, j);
//         break;
//       }
//     }
//   }
//   return result;
// };

const pairSum = (numbers, targetSum) => {
  let previous = {};

  for (let i = 0; i < numbers.length; i ++) {
    let addend = targetSum - numbers[i];
    if (addend in previous) {
      return [previous[addend], i];
    }
    previous[numbers[i]] = i;
  }
};

console.log(pairSum([3, 2, 5, 4, 1], 8));





