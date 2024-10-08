function fizzBuzz(n) {
  const arr = [ ...Array(n).keys() ].map( i => i+1)
  let result = '';

  for (let i of arr) {
      if (( i % 5 === 0 ) && ( i % 3 === 0 )) {
          result = result + 'FizzBuzz\n';
      } else if (( i % 3 === 0 ) && ( i % 5 !== 0)) {
          result = result + 'Fizz\n';
      } else if (( i % 5 === 0 ) && ( i % 3 !== 0)) {
          result = result + 'Buzz\n';
      } else {
          result = result + i + '\n';
      };
  }
  return result;
}

console.log(fizzBuzz(15))