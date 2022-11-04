function miniMaxSum(arr) {
    // Write your code here
    function calc(ar) {
        return ar.reduce(
            (prev, current, idx) => (!(idx > 3) ? (prev += current) : prev),
            0
        );
    }
    const min = calc(arr.sort((a, b) => a - b));
    const max = calc(arr.sort((a, b) => b - a));
    console.log(min, max);
}
miniMaxSum([1, 5, 3, 7, 9]);
