const genPascalsTriangle = (numRows) => {
  const res = [[1]]

  for (let i = 0; i < numRows - 1 ; i++) {
    const temp = [0, ...res[i], 0];
    const row = [];
    for (let j = 0; j < res[i].length + 1; j++) {
      row.push(temp[j] + temp[j + 1]);
    }
    res.push(row);
  }
  return res;
}

console.log(genPascalsTriangle(5))