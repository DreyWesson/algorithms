function getMaxSubSum(arr) {
    let max = -Infinity;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (sum < 0 && arr[i] > sum) sum = 0;
        sum += arr[i];
        max = Math.max(max, sum);
    }
    return max;
}
// getMaxSubSum([-1, 2, 3, -9]) //== 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) //== 6
// getMaxSubSum([-1, 2, 3, -9, 11]) //== 11
// getMaxSubSum([-2, -1, 1, 2]) //== 3
// getMaxSubSum([100, -9, 2, -3, 5])// == 100
// getMaxSubSum([1, 2, 3]) //== 6 (take all)
