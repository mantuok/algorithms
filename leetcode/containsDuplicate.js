const containsDuplicate = (nums) => {
  const numbers = new Set;
  for (n in nums) {
    if (numbers.has(n)) return true;
    numbers.add(n);
  }
  return false;
};

