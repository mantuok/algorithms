const maxProfit = (prices) => {
  let [left, right, max] = [0, 1, 0];
  while(right < prices.length) {
    const canSlide = prices[right] < prices[left];
    if (canSlide) left = right;

    const window = prices[right] - prices[left];
    max = Math.max(window, max);
    right++;
  }
  return max;
}


console.log(maxProfit([7,1,5,3,6,4]))