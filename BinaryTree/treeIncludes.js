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

const treeIncludes = (root, target) => {
  if (root === null) return false;
  let queue = [root];

  while (queue.length > 0) {
    const current = stack.shift();

    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
};

const _treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return _treeIncludes(root.left, target) || _treeIncludes(root.right, target);
};

console.log(treeIncludes(a, "e"));