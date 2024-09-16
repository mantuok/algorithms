// const a = 'ab'

// const foo = (s, t, K) => {
//   let leftK = K;
//   let subS = 0;
//   let subSs = '';

//   for (let i = 0; i < s.length - 1; i++) {
//     debugger
//     const a = s.charCodeAt(i);
//     const b = t.charCodeAt(i);
//     const cost = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
//     if (s[i] === t[i]) {
//       subS += 1;
//       // subSs += s[i];
//     } else if (s[i] !== t[i] && leftK >= cost) {
//       subS += 1;
//       // subSs += t[i];
//       leftK -= cost;
//     } else if (s[i] !== t[i] && leftK >= cost)
//   }
//   console.log(subSs);
//   return subS;
// }

// console.log(foo('ikgpda', 'ikxmdc', 6));

function dominatingXorPairs(arr) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          const bXor = arr[i] ^ arr[j];
          const bAnd = arr[i] & arr[j];
          console.log(bXor)
          console.log(bAnd)
          if (bXor > bAnd) {
              result += 1;
          }
          j++
      }
      i++;
  }
  console.log('result ' + result)
  return result;
}

dominatingXorPairs([4, 3, 5, 2]);