
const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (let node in graph) {
    if (helperFunction(node, graph, visited)) count += 1;
  }

  return count;
};

const helperFunction = (current, graph, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  for (let neighbor of graph[current]) {
    helperFunction(neighbor, graph, visited);
  };

  return true;
};

console.log(connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}))