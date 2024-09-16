const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

const hasPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

return false;
};

const _hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (_hasPath(graph, neighbor, dst)) return true;
  }
  return false;
}

console.log(_hasPath(graph, 'f', 'k'));

const arr = [1, 2, 3]

console.log(arr[4])