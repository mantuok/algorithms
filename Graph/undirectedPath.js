const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

const buildGraph = (edges) => {
  const graph = {};

  for (edge of edges) {
    const [a ,b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const queque = [nodeA];
  const visited = new Set();

  while (queque.length > 0) {
    const current = queque.shift();

    if (current === nodeB) return true;

    if (!visited.has(current)) {
      visited.add(current);
      for (let nieghbor of graph[current]) {
        queque.push(nieghbor);
      }
    }
  }

  return false;
};

const _undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  return helperFuntion(graph, nodeA, nodeB, new Set());
};

const helperFuntion = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let nieghbor of graph[src]) {
    if (helperFuntion(graph, nieghbor, dst, visited)) return true
  }
  return false;
}

console.log(_undirectedPath(edges, 'k', 'o'));

