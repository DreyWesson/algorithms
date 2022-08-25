// Hi, here's your problem today. This problem was recently asked by Microsoft:
// Return the longest run of 1s for a given integer n's binary representation.
// Example:
// Input: 242
// Output: 4
// 242 in binary is 0b11110010, so the longest run of 1 is 4.
// def longest_run(n):
//   # Fill this in.
// print longest_run(242)
// # 4

function consecutiveOnes(num, target) {
  num = num.toString(2);
  target = "" + target;

  let count = 0,
    max = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === target) count++;
    else count = 0;
    max = Math.max(count, max);
  }
  return max;
}
consecutiveOnes(242, 0);
