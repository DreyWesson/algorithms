// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// Example 1:
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Example 2:
// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".
// Example 3:
// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
// Example 4:
// Input: String="cbbebi", K=10
// Output: 6
// Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".

function longest_substring_with_k_distinct(str, k) {
  let tail = 0,
    maxLength = 0,
    memo = {};
  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let head = 0; head < str.length; head++) {
    const headChar = str[head];
    if (!memo[headChar]) memo[headChar] = 1;
    else memo[headChar]++;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(memo).length > k) {
      const tailChar = str[tail];
      memo[tailChar]--;
      if (memo[tailChar] === 0) delete memo[tailChar];
      tail++; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, head - tail + 1);
  }

  return maxLength;
}

console.log(longest_substring_with_k_distinct("araaci", 2));
console.log(longest_substring_with_k_distinct("araaci", 1));
console.log(longest_substring_with_k_distinct("cbbebi", 3));
