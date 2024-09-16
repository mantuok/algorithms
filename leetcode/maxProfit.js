const _maxProfit = (prices) => {
  let min = prices[0];
  let max = min;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= min) {
      min = prices[i];
      max = prices[i];
    } else {
      max = prices[i];
    }

    profit = max - min > profit ? max - min : profit;
  }

  return profit;
}

const maxProfit = (prices) => {
  let [left, right, max] = [0 ,1, 0];

  while (right < prices.length) {
    const canSlide = prices[right] < prices[left];
    if (canSlide) left = right;

    const window = prices[right] - prices[left];

    max = Math.max(window, max);
    right ++;
  }

  return max;
}

console.log(maxProfit([7,1,5,3,6,4]))