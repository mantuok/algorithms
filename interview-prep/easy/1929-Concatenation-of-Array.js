const concatArr = (nums) => {
    const arrLength = nums.length;
    for (let i = 0; i < arrLength; i++) {
      nums.push(nums[i]);
    }
  return nums;
}