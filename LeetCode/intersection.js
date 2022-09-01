/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    [nums2, nums1] = [nums1, nums2];
  }
  const memo = [];
  for (let i = 0; i < nums2.length; i++)
    if (nums1.includes(nums2[i])) memo.push(nums2[i]);
  return [...new Set(memo)];
};
