const majorityElement = (nums) => {
  const count = {};

  for (let num of nums) {
    if (!(num in count)) count[num] = [num, 0, false];
    count[num][1] += 1;
    count[num][2] = count[num][1] > (nums.length / 2);
  }

  debugger
  for (let key of Object.keys(count)) {
    if (count[key][2] === true) return count[key][0];
  }
}

console.log(majorityElement([3,2,3]))