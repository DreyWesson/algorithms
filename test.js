/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const mem = [...nums];
    const len = nums.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        mem[i] === 0 ? count++ : (nums[i - count] = mem[i]);
    }
    for (let i = len - 1; i > len - count - 1; i--) {
        nums[i] = 0;
    }
};
moveZeroes([0, 0, 1]);
