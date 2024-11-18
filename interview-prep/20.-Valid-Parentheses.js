const isValidParentheses = (s) => {
    const parentheses = {
        "}" : "{",
        "]" : "[",
        ")" : "("
    };

    const stack = [];

    for (let char of s) {
        if (!(char in parentheses)){
            stack.push(char);
            continue
        }
        if (parentheses[char] === stack[stack.length -1]) {
            stack.pop();
            continue
        }
        return false;
    }
    if (stack.length === 0) return true;

    return false;
}