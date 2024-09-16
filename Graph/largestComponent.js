const largestComponent = (graph) => {
  let maxCount = 0;
  let visited = new Set();

  for (let node in graph) {
    const componentSize = exploreSize(node, graph, visited);
    if (componentSize > maxCount) maxCount = componentSize;
  }

  return maxCount;
};

const exploreSize = (current, graph, visited) => {
  if (visited.has(String(current))) return 0;
  let size = 1;

  visited.add(String(current));

  for (let neighbor of graph[current]) {
    size += exploreSize(neighbor, graph, visited);
  }

  return size;
};


console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}));

