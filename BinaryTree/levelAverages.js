class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

const levelAverages = (root) => {
  if (root === null) return [];
  const queue = [{node: root, level: 0}];
  const levels = [];
  const result = [];

  while (queue.length > 0) {
    const {node, level} = queue.shift();

    if (levels.length === level) {
      levels.push({sum: node.val, num: 1});
    } else {
      levels[level].sum += node.val;
      levels[level].num += 1;
    }

    if (node.right) queue.push({node: node.right, level: level + 1});
    if (node.left) queue.push({node: node.left, level: level + 1});
  }

  for (let level of levels) {
    result.push(level.sum / level.num);
  }

  return result;
};

// const _levelAverages = (root) => {
//   const levels = [];
//   const result = [];

//   fillLevelAverages(root, levels);

//   for (let level of levels) {
//     result.push(level.sum / level.num);
//   }

//   return result;
// }

// const fillLevelAverages = (root, levels, level = 0) => {
//   if (root === null) return [];

//   if (levels.length === level) {
//     levels.push({sum: root.val, num: 1})
//   } else {
//     levels[level].sum += root.val;
//     levels[level].num += 1;
//   }

//   fillLevelAverages(root.left, levels, level + 1);
//   fillLevelAverages(root.right, levels,level + 1);

//   return levels;
// }

const _levelAverages = (root) => {
  const levels = [];
  const result = [];

  fillLevelAverages(root, levels, 0);

  for (let level of levels) {
    result.push(getAverage(level));
  }

  return result;
}

const getAverage = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item;
  }
  return sum / array.length;
}

const fillLevelAverages = (root, levels, level) => {
  if (root === null) return [];

  if (levels.length === level) {
    levels[level] = [root.val];
  } else {
    levels[level].push(root.val);
  }

  fillLevelAverages(root.left, levels, level + 1);
  fillLevelAverages(root.right, levels,level + 1);

  return levels;
}

console.log(_levelAverages(a))