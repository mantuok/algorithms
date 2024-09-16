const prereqsPossible = (numCourses, prereqs) => {
  const graph = buildGraph(prereqs, numCourses);
  const visiting = new Set();
  const visited = new Set();

  for (let node in graph) {
    if (discoverLoop(node, graph, visiting, visited)) return false;
  }

  return true;
};

const discoverLoop = (node, graph, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (discoverLoop(neighbor, graph, visiting, visited)) return true;
  }

  visiting.delete(node);
  visited.add(node);

  return false;
}

const buildGraph = (prereqs, numCourses) => {
  const graph = {};

  for (let i = 0; i < numCourses; i ++) {
    graph[i] = [];
  }

  for (prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }

  return graph;
}

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
console.log(prereqsPossible(numCourses, prereqs));