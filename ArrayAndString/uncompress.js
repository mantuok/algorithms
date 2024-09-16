// const uncompress = (s) => {
//   const sArray = Array.from(s);
//   let result = '';
//   let multiplicator = '';

//   for (let i = 0; i < sArray.length; i++) {
//     if (!isNaN(sArray[i])) {
//       multiplicator += sArray[i];
//     } else {
//       while (multiplicator > 0) {
//         result += sArray[i];
//         multiplicator--;
//       }
//     }
//   }
//   return result;
// };

const uncompress = (s) => {
  const numbers = '0123456789';
  let result = [];
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let multiplicator = 0; multiplicator < num; multiplicator++) {
        result.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return result.join('');
} 

uncompress("22c62a1t");


