const maxProfit = (prices) => {
  let [buyIndex, sellIndex, max] = [0, 1, 0];
  while(sellIndex < prices.length) {
    const canSlide = prices[sellIndex] < prices[buyIndex];
    if (canSlide) buyIndex = sellIndex;

    const window = prices[sellIndex] - prices[buyIndex];
    max = Math.max(window, max);
    sellIndex++;
  }
  return max;
}


console.log(maxProfit([7,1,5,3,6,4]))