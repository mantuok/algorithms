const isValidAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const chars = {};

    for (let i of s) {
        if (!(i in chars)) chars[i] = 0;
        chars[i] += 1;
    }

    for (let i of t) {
        if (!(i in chars)) return false;
        chars[i] -= 1;
    }

    for (let char in chars) {
        if (chars[char] !== 0) return false;
    }

    return true;
}