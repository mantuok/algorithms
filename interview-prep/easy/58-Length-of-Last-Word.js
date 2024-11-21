const lengthOfLastWord = (s) => {
  let lastWordLength = 0;
  const string = s.trim();

  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      lastWordLength = 0;
    } else {
      lastWordLength += 1;
    }
  }
  return lastWordLength;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "))

// ///////////////// // The better approach!

const _lengthOfLastWord = function (s) {
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') length += 1;
        else if (length !== 0) break;
    }
    return length;
};

console.log(_lengthOfLastWord("   fly me   to   the moon  "))