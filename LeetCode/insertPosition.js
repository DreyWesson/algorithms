// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function (array, target) {
  let head = array.length - 1,
    tail = 0,
    mid = null;
  while (tail <= head) {
    mid = ((head + tail) / 2) | 0;
    if (array[mid] === target) return mid;
    if (array[mid] > target) head = mid - 1;
    else tail = mid + 1;
  }
  return tail;
};
