/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    if (nums1.length < nums2.length) [nums2, nums1] = [nums1, nums2];
    const memo = [];
    const tmp = {};
    for (let i = 0; i < nums2.length; i++) {
        if (tmp[nums2[i]]) tmp[nums2[i]]++;
        else tmp[nums2[i]] = 1;
    }
    for (let i = 0; i < nums1.length; i++) {
        if (tmp[nums1[i]]) {
            memo.push(nums1[i]);
            tmp[nums1[i]]--;
            if (tmp[nums1[i]] === 0) delete tmp[nums1[i]];
        }
    }
    return memo;
};
