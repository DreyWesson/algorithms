/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const memo = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    memo[nums[i]] = true;
  }

  for (let i = 1; i < nums.length + 1; i++) {
    if (!memo[i]) result.push(i);
  }
  console.log(result);
};
findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
