const twoSums = (nums, target) => {
  const previous = {}
  for (let i = 0; i < nums.length; i++) {
    let addend = target - nums[i];
    if (addend in previous) {
      return [previous[addend], i]
    }
    previous[nums[i]] = i;
  }
};
