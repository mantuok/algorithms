const minimumIsland = (grid) => {
  const visited = new Set();
  let minIsland = Infinity;
  for (let r = 0; r < grid.length; r ++) {
    for (let c = 0; c < grid[0].length; c ++) {
      const islandSize = explore(grid, r, c, visited);
      if (minIsland > islandSize && islandSize > 0) minIsland = islandSize;
    }
  }

  return minIsland;
};

const explore = (grid, r, c, visited) => {
  const isRowInbounds = 0 <= r && r < grid.length;
  const isColumnInbouds = 0 <= c && c < grid[0].length;
  if (!isRowInbounds || !isColumnInbouds) return 0;
  if (grid[r][c] === "W") return 0;

  const pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;

  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r, c - 1, visited);
  size += explore(grid, r, c + 1, visited);

  return size;
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid));