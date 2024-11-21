const groupAnagrams = (strs) => {
  const result = {};
  for (let s of strs) {
    debugger
    const count = new Array(26).fill(0);

    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1
    }

    console.log(result)
    
    const key = count.join(",");
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(s)
  } 
  
  return Object.values(result);
}

groupAnagrams(["eat","tea","tan","ate","nat","bat"])

// result:
// {
//   codes of chars // '1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0': [ 'eat', 'tea', 'ate' ], //words that have the same chars in the same amount //
//   '1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0': [ 'tan', 'nat' ],
//   '1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0': [ 'bat' ]
// }