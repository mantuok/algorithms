const replaceElements = (arr) => {
  const length = arr.length;
  let max = -1;

  for (let i = length - 1; i >= 0; i--) {
    const current = arr[i];
    arr[i] = max;
    if (current > max) {
      max = current
    }
  }
  return arr;
}

console.log(replaceElements([17,18,5,4,6,1]));