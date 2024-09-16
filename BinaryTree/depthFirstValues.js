class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstValues = (root) => {
  if (root === null) return [];
  let stack = [root];
  let values = [];

  while (stack.length !== 0) {
    const current = stack.pop();
    values.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return values;
};

const _depthFirstValues = (root) => {
  if (root === null) return [];
  const leftValues =  _depthFirstValues(root.left);
  const rightValues = _depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues]
};

console.log(_depthFirstValues(a))

//    -> ['a', 'b', 'd', 'e', 'c', 'f']