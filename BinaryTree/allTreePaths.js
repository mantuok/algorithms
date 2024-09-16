class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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

// const allTreePaths = (root) => {
//   if (root == null) return [];
//   if (!root.left && !root.right) return [[root.val]];
//   const leftPaths = allTreePaths(root.left);
//   const rightPaths = allTreePaths(root.right);
//   const paths = leftPaths.concat(rightPaths);
//   for (let path of paths) {
//     path.unshift(root.val)
//   };
//   return paths;
// };

const allTreePaths = (root) => {
  if (root == null) return [];
  if (!root.left && !root.right) return [[root.val]];
  const paths = [];

  const leftPaths = allTreePaths(root.left);
  for (let subPath of leftPaths) {
    paths.push([root.val, ...subPath]);
  }

  const rightPaths = allTreePaths(root.right);
  for (let subPath of rightPaths) {
    paths.push([root.val, ...subPath]);
  }

  return paths;
};

console.log(allTreePaths(a))
