const buildGraph = (numCourses, prereqs) => {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }

  return graph;
}

const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs)

  console.log(graph)
  const semesters = {};

  for (let course in graph) {
    if (graph[course].length === 0) semesters[course] = 1;
  }

  for (let course in graph) {
    explore(course, graph, semesters);
  }

  console.log(semesters)

  return Math.max(...Object.values(semesters));
};

const explore = (course, graph, semesters) => {
  if (course in semesters) return semesters[course];
  let maxLength = 0;

  for (let neighbor of graph[course]) {
    const length = explore(neighbor, graph, semesters);
    if (maxLength < length) maxLength = length;
  }

  semesters[course] = 1 + maxLength;

  return semesters[course];
}


const numCourses = 7;
const prereqs = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];
semestersRequired(numCourses, prereqs);

console.log(semestersRequired(numCourses, prereqs));