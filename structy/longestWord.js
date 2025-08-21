const longestWord = (sentence) => {
 const words = sentence.split(" ");
 let longestWord = "";

 for (let word of words) {
  if (word.length >= longestWord.length) {
    longestWord = word;
  }
 }

 return longestWord;
};

console.log(longestWord("what a wonderful world"))
