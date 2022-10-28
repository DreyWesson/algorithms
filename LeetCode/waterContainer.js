/**
 * @param {number[]} height
 * @return {number}
 * @link {https://leetcode.com/problems/container-with-most-water/description/}
 */
var maxArea = function (height) {
    let max = -Infinity,
        i = 0,
        j = height.length - 1;
    let arrayLength = height.length - 1;
    while (i < height.length - 1 && j > 0) {
        const leftBar = height[i];
        const rightBar = height[j];
        let min = Math.min(leftBar, rightBar);
        max = Math.max(max, min * arrayLength);
        leftBar < rightBar ? i++ : j--;
        arrayLength--;
    }
    return max;
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height);
maxArea([1, 1]);
