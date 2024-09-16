const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);

  const leftSorted = mergeSort(nums.slice(0, mid));
  const rightSorted = mergeSort(nums.slice(mid));

  return merge(leftSorted, rightSorted);
}

const merge = (nums1, nums2) => {
  nums1.reverse();
  nums2.reverse();

  const merged = [];

  while (nums1.length > 0 && nums2.length > 0) {
    if (nums1[nums1.length - 1] < nums2[nums2.length - 1]) {
      merged.push(nums1.pop());
    } else {
      merged.push(nums2.pop());
    }
  }

  merged.push(...nums1.reverse());
  merged.push(...nums2.reverse());

  return merged;
}