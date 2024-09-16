class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeLevels = (root) => {
  if (root === null) return [];

  const stack = [{node: root, level: 0}];
  const levels = [];

  while (stack.length > 0) {
    let {node, level} = stack.pop();

    if (!levels[level]) {
      levels.push([node.val]);
    } else {
      levels[level].push(node.val);
    }

    if (node.right) stack.push({node: node.right, level: level + 1});
    if (node.left) stack.push({node: node.left, level: level + 1});
  }

  return levels;
};

const _treeLevels = (root) => {
  const levels = [];

  fillLevels(root, levels, 0)

  return levels;
};

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels.push([root.val]);
  } else {
    levels[levelNum].push(root.val);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
}

console.log(treeLevels(a))