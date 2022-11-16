/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let tail = 1;
    for (let head = 1; head < nums.length; head++) {
        if (nums[head] != nums[head - 1]) {
            nums[tail] = nums[head];
            tail++;
        }
    }
    nums.splice(tail);
    console.log(nums);
};
