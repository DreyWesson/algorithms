/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length;
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[end], arr[start]] = [arr[start], arr[end]];
            start++;
            end--;
        }
        return arr;
    }
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
