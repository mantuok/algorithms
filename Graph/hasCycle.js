const hasCycle = (graph) => {
  const visited = new Set();
  const visiting = new Set();

  for (let node in graph) {
    if (discoverCycle(graph, node, visited, visiting)) return true;
  }

  return false;
};

const discoverCycle = (graph, node, visited, visiting) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (discoverCycle(graph, neighbor, visited, visiting)) return true;
  }
  visiting.delete(node);
  visited.add(node);

  return false;
};



console.log(hasCycle({
  a: ["b", "c"],
  b: [],
  c: [],
  e: ["f"],
  f: ["e"],
}));