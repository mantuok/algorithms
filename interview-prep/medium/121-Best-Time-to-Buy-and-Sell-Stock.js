const bestBuy = (prices) => {
    let [buyPrice, sellPrice, max] = [0, 1, 0];
    
    while (sellPrice < prices.length) {
        if (prices[sellPrice] < prices[buyPrice]) {
            buyPrice = sellPrice;
        } else {
            const window = prices[sellPrice] - prices[buyPrice];
            max = Math.max(window, max);
        }
        sellPrice++;
    }
    return max; 
}

console.log(bestBuy([1,2])); 