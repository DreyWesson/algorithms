// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

const longestConsecutiveSequence = (numbers) => {
  if (numbers.length === 1) return 1;
  if (numbers.length === 0) return 0;
  numbers = numbers.sort((a, b) => a - b);
  let count = 1,
    max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) continue;
    numbers[i] + 1 === numbers[i + 1] ? count++ : (count = 1);
    max = Math.max(max, count);
  }
  return max || 1;
};
