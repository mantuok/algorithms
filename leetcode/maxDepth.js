const maxDepth = (root) => {
  if (root === null) return 0;
  const max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return 1 + max;
}