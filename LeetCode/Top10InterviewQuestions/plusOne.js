/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let remainder = 1;
    let nextVal = null;
    for (let i = digits.length - 1; i >= 0; i--) {
        const currentVal = digits[i];
        digits[i] += remainder;
        remainder = 0;
        if (digits[i] === 10) {
            digits[i] = 0;
            remainder = 1;
        }
        nextVal = digits[i - 1];
        if (nextVal === currentVal && remainder === 0) break;
    }
    if (remainder !== 0) digits = [remainder, ...digits];
    return digits;
};
