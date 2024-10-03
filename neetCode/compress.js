const compress = (s) => {
  if (s.length === 0) return s;

  let result = '';
  let prev = s[0].toLowerCase();
  let count = 0;


  for (let i in s) {
    const curr = s[i].toLowerCase();
    debugger
    if (curr === prev) {
      count++;
    } else {
      result = result + prev + count;
      count = 1;
      prev = curr;
    }
  }
  result = result + prev + count;
  if (s.length <= result.length) return s;
  return result;
}

console.log(compress('ab'))
console.log(compress(''))
console.log(compress('aaabbcccc'))

 /*
 * Write a method to compress a given string.
 * e.g.
 * input = aabccCCaaa
 * output = a2b1c4a3
 * if input length is <= output then don't compress and return the original input string.
 * */