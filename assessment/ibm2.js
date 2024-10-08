const findTotalCost = (arr) => {
  let numbers = arr;
  let totalCost = 0;

  while (numbers.length > 1) {
    debugger
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const sum = min + max;
    const cost = Math.ceil(sum / (max - min + 1))
    totalCost += cost;

    const minIndex = numbers.indexOf(min);
    const maxIndex = numbers.indexOf(max);

    numbers = numbers.filter((_, i) => (i !== minIndex ) && (i !== maxIndex))

    numbers.push(sum);
  }

  console.log(totalCost)
  return totalCost;
};

findTotalCost([4, 8, 8, 8, 8]);

const minPartitions = (used, totalCapacity) => {
  let usedPartictions = 0;
  let currentSpace = 0;

  for (let i = 0; i < used.length; i++) {
    currentSpace = currentSpace + used[i];
    if (i < totalCapacity.length) {
      const availableSpace = totalSpace[i] - currentSpace;
      if (availableSpace >= 0) {
        usedPartictions += 1;
        currentSpace = 0;
      } else {
        currentSpace = -availableSpace;
      }
    }
  }

  if (currentSpace > 0) {
    usedPartitions += 1;
  }

  return usedPartitions
}