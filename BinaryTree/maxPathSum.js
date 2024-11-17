const maxPathSum = (root) => {
  var max = -Number.MAX_VALUE;
  getMax(root);
  return max;

  function getMax (node) {
    if (node === null) return 0;
    const leftSum = getMax(node.left);
    const rightSum = getMax(node.right);
    max = Math.max(max, node.val + leftSum + rightSum);
    return Math.max(0, node.val + leftSum, node.val + rightSum);
  } 
}


console.log(maxPathSum([1,2,3]));