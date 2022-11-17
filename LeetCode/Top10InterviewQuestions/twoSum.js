/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = [];

    for (let head = 0; head < nums.length; head++) {
        for (let index = head + 1; index < nums.length; index++) {
            if (nums[head] + nums[index] === target) {
                result = [head, index];
            }
        }
    }
    return result;
};
