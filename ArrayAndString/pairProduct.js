const pairProduct = (numbers, targetProduct) => {
  let previousNumbers = {};

  for (let i = 0; i < numbers.length; i++) {
    let multiplier = targetProduct / numbers[i];

    if (multiplier in previousNumbers) {
      return [previousNumbers[multiplier], i];
    }

    previousNumbers[numbers[i]] = i;
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8));