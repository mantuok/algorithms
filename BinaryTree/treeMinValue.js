class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(2);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeMinValue = (root) => {
  let min = Infinity;
  let stack = [root]

  while (stack.length > 0) {
    let current = stack.shift();
    if (current.val < min) min = current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return min;
};

const _treeMinValue = (root) => {
  if (root === null) return Infinity;
  return Math.min(root.val, _treeMinValue(root.left), _treeMinValue(root.right));
};

console.log(treeMinValue(a))