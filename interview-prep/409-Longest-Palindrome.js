s = "abccccdd";

const longestPalindrome = (s) => {
    let oddFrequency = 0;
    let lettersCount = {};

    for (let letter of s) {
        lettersCount[letter] = (lettersCount[letter] || 0) + 1;
        if (lettersCount[letter] % 2 === 1) {
            oddFrequency ++;
        } else {
            oddFrequency --;
        }
    }

    if (oddFrequency > 1) {
        return s.length - oddFrequency + 1;
    }
    return s.length;
}