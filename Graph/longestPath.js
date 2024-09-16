const _longestPath = (graph) => {
  let longestPath = -Infinity;
  debugger
  for (let node of Object.keys(graph)) {
    const queue = [[node, 0]];

    while (queue.length > 0) {
      const [current, distance] = queue.shift();

      if (longestPath < distance) longestPath = distance;

      for (let neighbor of graph[current]) {
        queue.push([neighbor, distance + 1])
      }
    }
  }
  return longestPath;
};

// const longestPath = (graph) => {
//   const visited = new Set();
//   let longestPath = 0;
//   for (let node in graph) {
//     const pathLength = explore(node, graph, visited);
//     if (longestPath < pathLength) longestPath = pathLength;
//   }
//   return longestPath;
// };

// const explore = (node, graph, visited) => {
//   if (graph[node].length === 0) return 0;
//   let pathLength = 1;
//   for (let neighbor of graph[node]) {
//     if (!visited.has(neighbor)) {
//       visited.add(neighbor);
//       pathLength += explore(neighbor, graph, visited);
//     }
//   }

//   return pathLength;
// }

const longestPath = (graph) => {
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) distance[node] = 0;
  }

  for (let node in graph) {
    explore(node, graph, distance);
  }

  return Math.max(...Object.values(distance))
};

const explore = (node, graph, distance) => {
  if (node in distance) return distance[node];
  let maxLength = 0;

  for (let neighbor of graph[node]) {
    const pathLength = explore(neighbor, graph, distance);
    if (maxLength < pathLength) maxLength = pathLength;
  }

  distance[node] = 1 + maxLength;

  return distance[node];
}


const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: []
};

console.log(longestPath(graph));