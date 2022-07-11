// Amazon:
// Given two arrays, write a function to compute their intersection - the intersection means the numbers that are in both arrays.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:
// Each element in the result must be unique.
// The result can be in any order.

function arrIntersection(arr1, arr2) {
  const memo = {},
    result = [];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (memo[element]) continue;
    memo[element] = memo[element]++ || 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (memo[element]) {
      result.push(element);
      delete memo[element];
    }
  }
  console.log(result);
  return result;
}
arrIntersection([1, 2, 2, 1], [2, 2]);
arrIntersection([4, 9, 5], [9, 4, 9, 8, 4]);
