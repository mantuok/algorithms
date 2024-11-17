const mergeSortedArr = (nums1, m, nums2, n) => {
    let mIndex = m - 1;
    let nIndex = n - 1;
    let rightIndex = m + n - 1;

    while (nIndex >= 0) {
        if (mIndex >= 0 && nums1[mIndex] > nums2[nIndex]) {
            nums1[rightIndex] = nums1[mIndex];
            mIndex = mIndex - 1;
        } else {
            nums1[rightIndex] = nums2[nIndex];
            nIndex = nIndex - 1;
        }
        rightIndex--;
    }

    return nums1;
}