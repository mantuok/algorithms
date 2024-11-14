var minimizedMaximum = function(n, quantities) {
    if (n === 1) {
        return Math.max(...quantities);
    }

    let low = 1;
    let high = Math.max(...quantities);

    while ( low < high ) {
        const mid = Math.floor((low + high) / 2);
        if (itWorks(quantities, mid, n)) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};

const itWorks = (quantities, mid, totalStores) => {
        let sum = 0;
        for (let u of quantities) {
            sum += Math.ceil(u / mid);
        }
        return sum > totalStores;
}