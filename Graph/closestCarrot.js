// const closestCarrot = (grid, startRow, startCol) => {
//   const visited = new Set();
//   visited.add(startRow + ',' + startCol)
//   const queue = [[startRow, startCol, 0]];

//     while (queue.length > 0) {
//       debugger
//       const [cR, cC, distance] = queue.shift();

//       if (grid[cR][cC] === "C") return distance;

//       if ((cR - 1) >= 0) {
//         const topNeighbor = (cR - 1) + ',' + cC;
//         if (!visited.has(topNeighbor) && grid[cR - 1][cC] !== "X") {
//           visited.add(topNeighbor);
//           queue.push([cR - 1, cC, distance + 1])
//         }
//       }

//       if ((cR + 1) < grid.length) {
//         const bottomNeighbor = (cR + 1) + ',' + cC;
//         if (!visited.has(bottomNeighbor) && grid[cR + 1][cC] !== "X") {
//           visited.add(bottomNeighbor);
//           queue.push([cR + 1, cC, distance + 1])
//         }
//       }

//       if ((cC - 1) >= 0) {
//         const leftNeighbor = cR + ',' + (cC - 1);
//         if (!visited.has(leftNeighbor) && grid[cR][cC - 1] !== "X") {
//           visited.add(leftNeighbor);
//           queue.push([cR, cC - 1, distance + 1])
//         }
//       }

//       if ((cC + 1) < grid[0].length) {
//         const rightNeighbor = cR + ',' + (cC + 1);
//         if (!visited.has(rightNeighbor) && grid[cR][cC + 1] !== "X") {
//           visited.add(rightNeighbor);
//           queue.push([cR, cC + 1, distance + 1])
//         }
//       }
//     }

//   return -1;
// };

const closestCarrot = (grid, startRow, startCol) => {
  const queue = [[startRow, startCol, 0]];
  const visited = new Set([startRow + ',' + startCol]);

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (grid[row][col] === "C") return distance;

    const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let detla of deltas) {
      const [rowDelta, colDelta] = detla;
      const neighborRow = row + rowDelta;
      const neighborCol = col + colDelta;
      const isRowInbounds = 0 <= neighborRow && neighborRow < grid.length;
      const isColInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
      const neighborPos = neighborRow + ',' + neighborCol;
      if (
        isRowInbounds && isColInbounds &&
        grid[neighborRow][neighborCol] !== "X" &&
        !visited.has(neighborPos)
      ) {
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(neighborPos);
      }
    }
  }

  return -1;
}

const grid = [
  ['O', 'O', 'X', 'X', 'X'],
  ['O', 'X', 'X', 'X', 'C'],
  ['O', 'X', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'C', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O'],
];

console.log(closestCarrot(grid, 3, 4));