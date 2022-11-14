// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
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
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
// sym([1, 2, 3], [5, 2, 1, 4, 5]);
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);

// function sym(...args) {
//     let bucket = args[0].reduce(
//         (prev, curr) => ({
//             ...prev,
//             [curr]: curr,
//         }),
//         {}
//     );
//     let count = 0;
//     for (let i = 1; i < args.length; i++) {
//         let arg = null;
//         for (let j = 0; j < args[i].length; j++) {
//             arg = count === 0 ? [...new Set(args[i])] : arg;
//             !bucket[arg[j]] ? (bucket[arg[j]] = arg[j]) : delete bucket[arg[j]];
//             count++;
//         }
//         count = 0;
//     }
//     args = [];
//     Object.values(bucket).forEach((val) => val && args.push(val));
//     return args;
// }
