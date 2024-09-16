class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeSum = (root) => {
  if (root === null) return 0;
  let result = 0;
  let stack = [root];

  while (stack.length > 0) {
    debugger
    const current = stack.pop();
    result += current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return result;
};

const _treeSum = (root) => {
  if (root === null) return 0;
  return (root.val + _treeSum(root.left) + _treeSum(root.right)) ;
};




console.log(_treeSum(a)); // -> 21
