const longestPrefix = (strs) => {
    let prefix = strs[0];
    let prefixLength = prefix.length;

    for (let i = 0; i < strs.length; i++) {
        let string = strs[i];
        while (prefix !== string.substring(0, prefixLength)) {
            prefixLength--;
            if (prefixLength === 0) {
                return "";
            }
            prefix = prefix.substring(0, prefixLength)
        }
        
    }
    return prefix;
}

console.log(longestPrefix(["flower","flow","flight"]))