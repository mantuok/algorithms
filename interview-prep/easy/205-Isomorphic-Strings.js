const isIsomorphic = (s, t) => {
  const mapping = {};

  for (let i = 0; i < s.length; i++) {
    debugger
    if (!(s[i] in mapping)) {
      if (Object.values(mapping).includes(t[i])) {
        return false;
      }
      mapping[s[i]] = t[i];
    } else {
      if (mapping[s[i]] !== t[i]) {
        return false
      }
    }
  }

  return true;
}

console.log(isIsomorphic("paper", "title"))