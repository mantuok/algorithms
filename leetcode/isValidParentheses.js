const isValid = (s) => {
  const parentheses = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  debugger
  const stack = [];

  for (let char of s) {

    const isBracket = (char in parentheses);
    if (!isBracket) {
      stack.push(char);
      continue;
    }
    debugger
    const isEqual = (stack[stack.length - 1] === parentheses[char]);
    if (isEqual) {
      stack.pop();
      continue;
    }
    return false;
  }
  return (stack.length === 0);
}

console.log(isValid('(([]))'))