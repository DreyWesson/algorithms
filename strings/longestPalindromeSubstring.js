// ************
// My version
// ************
function longestPalindromeSubstr(str) {
  const memo = {},
    strlen = str.length;
  let max = 0;
  const reverseFunc = (str) => {
    const strlen = str.length;
    let result = "";
    if (str.charAt(0) !== str.charAt(strlen - 1)) return false;
    for (let i = strlen - 1; i >= 0; i--) result += str.charAt(i);
    return result === str ? true : false;
  };

  for (let head = 0; head < strlen; head++) {
    const element = str.charAt(head);
    if (!memo[element]) {
      memo[element] = { pos: [head + 1] };
      memo[element].prev = head;
      memo[element].firstPos = head;
    } else {
      const prevPos = memo[element].prev;
      const firstPos = memo[element].firstPos;
      const currentPosNext = head + 1;
      memo[element].pos.push(currentPosNext);
      const firstOccurrenceToLast = str.substring(firstPos, currentPosNext);
      const prevOccurrenceToNext = str.substring(prevPos, currentPosNext);

      memo[element][firstOccurrenceToLast] = true;
      memo[element][prevOccurrenceToNext] = true;
      memo[element].prev = head;

      if (reverseFunc(firstOccurrenceToLast))
        max = Math.max(max, firstOccurrenceToLast.length);

      if (reverseFunc(prevOccurrenceToNext))
        max = Math.max(max, prevOccurrenceToNext.length);
    }
  }

  let newTail, pos, posLen;
  Object.entries(memo).forEach(([key, value]) => {
    if (value.pos.length > 2) {
      pos = memo[key].pos;
      posLen = pos.length;
      newTail = posLen - 1;
      for (let i = 0; i < posLen; i++) {
        const element = pos[i];
        let newTail2 = posLen - 1;
        for (let j = i + 1; j < posLen; j++) {
          const store = str.substring(element - 1, pos[newTail2]);
          if (memo[key][store]) continue;
          memo[key][str.substring(element - 1, pos[newTail2])] = true;
          newTail2--;
          if (reverseFunc(store)) max = Math.max(max, store.length);
        }
      }
    }
  });
  console.log(max);
  //   console.log(memo);
  return max;
}
// longestPalindromeSubstr("lol");
// longestPalindromeSubstr("million");
// console.time();
// longestPalindromeSubstr("abracadabra");
// longestPalindromeSubstr("noon");
// longestPalindromeSubstr("a level b");
// longestPalindromeSubstr(
//   "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
// );
// console.timeEnd();

function longestPalSubstr(str) {
  let n = str.length;
  if (n < 2) return n;
  let maxLength = 1,
    start = 0,
    low,
    high;
  for (let i = 0; i < n; i++) {
    low = i - 1;
    high = i + 1;
    while (high < n && str[high] == str[i]) high++;
    while (low >= 0 && str[low] == str[i]) low--;
    while (low >= 0 && high < n && str[low] == str[high]) {
      low--;
      high++;
    }

    let length = high - low - 1;
    if (maxLength < length) {
      maxLength = length;
      start = low + 1;
    }
  }
  console.log(maxLength);
  return maxLength;
}
// console.time();
longestPalSubstr("abracadabra");
longestPalSubstr("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE");
// console.timeEnd();
