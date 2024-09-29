const isValidParentheses = (s) => {
  const parentheses = {
    "}" : "{",
    "]" : "[",
    ")" : "("
  };

  const stack = [];

  for (let char of s) {
    const isClosingBracket = (char in parentheses);
    if (!isClosingBracket) {
      stack.push(char);
      continue
    }

    const isCorrectClosingBracket = ( stack[stack.length - 1] === parentheses[char] )
    if (isCorrectClosingBracket) {
      stack.pop();
      continue
    }
    return false;
  }

  if (stack.length === 0) return true;

  return false;
}

console.log(isValidParentheses("[(}{})]]"))