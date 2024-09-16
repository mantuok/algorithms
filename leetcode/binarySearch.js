const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2)
    if (nums[middle] < target) {
      low = middle + 1;
    } else if (nums[middle] > target) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8], 6));