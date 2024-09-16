// const fib = (n) => {
//   const memoVal = {};
//   return findFibVal(memoVal, n);
// };

// const findFibVal = (memoVal, n) => {
//   if (n === 0 || n === 1) {
//     memoVal[n] = n;
//     return n;
//   }

//   if (memoVal[n]) return memoVal[n];

//   const val = findFibVal(memoVal, n - 2) + findFibVal(memoVal, n - 1);

//   memoVal[n] = val;

//   return val;
// }

const fib = (n, memo = {}) => {
  if (n === 0 || n === 1) {
    return n;
  }

  if (memo[n]) return memo[n];

  memo[n] = fib(n - 2, memo) + fib(n - 1, memo);

  return memo[n];
};

console.log(fib(3));