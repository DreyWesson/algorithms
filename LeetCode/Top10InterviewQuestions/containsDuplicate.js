/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const memo = {};

    for (let i = 0; i < nums.length; i++) {
        if (memo[nums[i]]) return true;
        else memo[nums[i]] = true;
    }
    return false;
};
