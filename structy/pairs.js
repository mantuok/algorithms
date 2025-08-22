const pairs = (elements) => {
  const resultArray = [];

  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      resultArray.push([elements[i], elements[j]])
    } 
  }

  return resultArray;
};

console.log(pairs(["a", "b", "c", "d"]))