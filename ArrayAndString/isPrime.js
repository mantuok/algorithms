const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


// const isPrime = (n) => {
//   const lastFactor = Math.floor(Math.sqrt(n));
//   const nArray = [...Array(lastFactor).keys()].map(i => i + 1);
//   let result = true;
  
//   if (n === 1) {
//     result = false;
//     return result;
//   }
  
//   for (let num of nArray) {
//     if (
//       num != 0 &&
//       num != 1 &&
//       n % num === 0
//     ) {
//       result = false;
//       break;
//     }
//   }
//   return result;
// };