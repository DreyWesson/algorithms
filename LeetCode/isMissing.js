// Given an unsorted integer array nums, return the smallest missing positive integer.
// You must implement an algorithm that runs in O(n) time and uses constant extra space.
// Example 1:
// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

const firstMissingPositive = function (nums) {
  // Runtime: 94 ms, faster than 98.28% of JavaScript online submissions for First Missing Positive.
  // Memory Usage: 44.9 MB, less than 100.00% of JavaScript online submissions for First Missing Positive.
  let i = 0;
  function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  while (i < nums.length) {
    let corrIndex = nums[i] - 1;
    console.log(corrIndex, nums[i]);
    nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[corrIndex]
      ? swap(nums, i, corrIndex)
      : i++;
  }
  for (let j = 0; j < nums.length; j++) if (nums[j] != j + 1) return j + 1;
  return nums.length + 1;
};

var firstMissingPos = function (nums) {
  // Runtime: 189 ms
  // Memory Usage: 64.9 MB
  let setData = new Set(nums);
  for (let i = 1; i <= setData.size; i++) if (!setData.has(i)) return i;
  return setData.size + 1;
};
firstMissingPos([3, 4, -5, 1, 1]);
firstMissingPos([3, 4, -5, 1, 1]);
