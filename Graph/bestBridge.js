const bestBridge = (grid) => {
  let mainIsland;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const potentialIsland = findIsland(grid, r, c, new Set());
      if (potentialIsland.size > 0) {
        mainIsland = potentialIsland;
      }
    }
  }

  const visited = new Set(mainIsland);
  const queue = [];

  for (let land of mainIsland) {
    const [r, c] = land.split(',').map(Number);
    queue.push([r, c, 0]);
  }

  while (queue.length > 0) {
    debugger
    const [r, c, distance] = queue.shift();

    if (grid[r][c] === "L" && distance !== 0) return distance - 1;

    const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (delta of deltas) {
      const [rDetla, cDelta] = delta;
      const neighborR = r + rDetla;
      const neighborC = c + cDelta;
      const neighborPos = neighborR + ',' + neighborC;
      if (
        isInbounds(grid, neighborR, neighborC) &&
        !visited.has(neighborPos)
      ){
        queue.push([neighborR, neighborC, distance + 1]);
        visited.add(neighborPos);
      }
    }
  }

  return -1;
};


const isInbounds = (grid, r, c) => {
  const isRowInbounds = 0 <= r && r < grid.length;
  const isColumnInbounds = 0 <= c && c < grid[0].length;
  return isRowInbounds && isColumnInbounds;
}

const findIsland = (grid, r, c, visited) => {
  if (!isInbounds(grid, r, c) || grid[r][c] === "W") return visited;

  const pos = r + ',' + c;

  if (visited.has(pos)) return visited;
  visited.add(pos);

  findIsland(grid, r - 1, c, visited);
  findIsland(grid, r + 1, c, visited);
  findIsland(grid, r, c - 1, visited);
  findIsland(grid, r, c + 1, visited);

  return visited;
}





const grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];

console.log(bestBridge(grid))
