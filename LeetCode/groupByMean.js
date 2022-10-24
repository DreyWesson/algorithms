function groupByMean(a) {
    const arr = [],
        memo = new Map();
    let mean = 0;
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        let j = 0;
        for (j = 0; j < element.length; j++) mean += element[j];

        memo.has(mean / j)
            ? memo.set(mean / j, [...memo.get(mean / j), i])
            : memo.set(mean / j, [i]);
        mean = 0;
    }
    for (const [key, value] of memo) arr.push(value);
    console.log(arr);
    return arr;
}
groupByMean([
    [3, 2],
    [8, 4],
    [2, 7, 5],
    [3, 3, 2],
    [3, 2],
    [3, 3, 2],
]);
