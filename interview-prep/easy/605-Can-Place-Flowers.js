const canPlaceFlowers = (flowerbed, n) => {
  debugger
const modFlowerbed = [0, ... flowerbed, 0];
  for (let i = 1; i <= flowerbed.length; i++) {
    if (modFlowerbed[i - 1] == 0 && modFlowerbed[i] == 0 && modFlowerbed[i + 1] == 0) {
      modFlowerbed[i] = 1;
      n -= 1;
    } 
  }

  return n <= 0;

}

console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2))