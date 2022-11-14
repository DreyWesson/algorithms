function sym(...args) {
    return [...args.reduce(reducer, new Set())];
}

function reducer(prev, curr) {
    for (let val of new Set(curr))
        prev.has(val) ? prev.delete(val) : prev.add(val);
    return prev;
}
console.log(
    sym(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
        [5, 3, 9, 8],
        [1]
    )
);
