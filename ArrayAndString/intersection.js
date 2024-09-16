// const intersection = (a, b) => {
//   const joinedArray = a.concat(b);
//   let numbers = {};
//   let result = [];

//   for (let number of joinedArray) {
//     if (!(number in numbers)) {
//       numbers[number] = 0;
//     }
//     numbers[number] += 1;

//     if (numbers[number] > 1) {
//       result.push(number);
//     }
//   }
  
//   return result;
// };

const intersection = (a, b) => {
  let result = [];
  const numbersASet = new Set(a);

  console.log(numbersASet)

  for (let number of b) {
    if (numbersASet.has(number)) {
      result.push(number);
    }
  }
  return result;
};


console.log(intersection([4,2,1,6], [3,6,9,2,10]));