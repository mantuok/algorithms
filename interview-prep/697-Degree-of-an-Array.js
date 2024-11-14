const arrayDegree = (nums) => {
    const countNumbers = {};
    const firstIndeces = {};
    const lastIndeces = {};
    let maxDegreeCount = 0;
    let minLength = nums.length;
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i]
        if (!(number in countNumbers)) {
            countNumbers[number] = 0;
            firstIndeces[number] = i;
        }
        lastIndeces[number] = i;
        countNumbers[number] += 1;
        maxDegreeCount = Math.max(maxDegreeCount, countNumbers[number])
    }

    for (const [number, count] of Object.entries(countNumbers)) {
        if (count === maxDegreeCount) {
            const length = lastIndeces[number] - firstIndeces[number] + 1;
            minLength = Math.min(minLength, length);
        }
    }

    return minLength;
}

console.log(arrayDegree([2,1,1,2,1,3,3,3,1,3,1,3,2]));
