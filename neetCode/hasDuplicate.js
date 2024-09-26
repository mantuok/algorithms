const hasDuplicate = (nums) => {
  const uniqueNums = new Set()

  for (let i in nums) {
    if (uniqueNums.has(nums[i]))
      return true;
    else {
      uniqueNums.add(nums[i])
    }
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3]))