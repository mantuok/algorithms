const sqSorterArr = (nums) => {
    let left = 0;
    let right = arr.lenght - 1;
    let result = new Array(nums.length).fill(0);;

    for (let i = nums.length - 1 ; i >= 0; i-- ) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] ** 2;
            left++;
        }
        else {
            result[i] = nums[right] ** 2;
            right--;
        }
    }
    return result;
}


nums = [-4,-1,0,3,10]

// 0 1 9 16 100