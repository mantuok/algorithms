// const fiveSort = (nums) => {
//   let i = 0;
//   let j = nums.length - 1;

//   while (i !== j) {
//     debugger
//     if (nums[j] == 5) {
//       j--;
//     } else if (nums[i] !== 5) {
//       i++
//     } else {
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//     }
//   }
//   return nums;
// };

const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++
    } else {
      i++;
    }
  }
  return nums;
};


console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
