function subSum(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN;
    }

    const startIndex = Math.max(start, 0);
    const endIndex = Math.min(end, arr.length - 1);

    return arr
        .slice(startIndex, endIndex + 1)
        .reduce((acc, cur) => {
            return acc + Number(cur);
        }, 0)
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));