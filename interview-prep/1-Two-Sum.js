const twoSum = (nums, target) => {
    const previous = {};

    for (let i = 0; i < nums.length; i++) {
        const addend = target - nums[i];
        if (addend in previous) {
            return [previous[addend], i]
        }
        previous[nums[i]] = i;
    }
};