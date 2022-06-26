function longestPalindromeSubstr(str) {
  const memo = {};
  let max = 0;
  const reverseFunc = (str) => {
    let result = "";
    if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
    for (let i = str.length - 1; i >= 0; i--) {
      const element = str.charAt(i);
      result += element;
    }
    return result === str ? true : false;
  };

  for (let head = 0; head < str.length; head++) {
    const element = str.charAt(head);
    if (!memo[element]) {
      memo[element] = { pos: [head + 1] };
      memo[element].prev = head;
      memo[element].firstPos = head;
    } else {
      const prevPos = memo[element].prev;
      const firstPos = memo[element].firstPos;
      const currentPosNext = head + 1; // +1 takes care of zero index
      memo[element].pos.push(currentPosNext);
      const firstOccurrenceToLast = str.substring(firstPos, currentPosNext);
      const prevOccurrenceToNext = str.substring(prevPos, currentPosNext);

      memo[element][firstOccurrenceToLast] = true; // push from 0: 4->6->8->11
      memo[element][prevOccurrenceToNext] = true; // push from 0: 4->6->8->11
      memo[element][`${prevPos + 1}-${currentPosNext}`] = true;
      memo[element][`${firstPos + 1}-${currentPosNext}`] = true;
      memo[element].prev = head;

      if (reverseFunc(firstOccurrenceToLast)) {
        max = Math.max(max, firstOccurrenceToLast.length);
      }
      if (reverseFunc(prevOccurrenceToNext)) {
        max = Math.max(max, prevOccurrenceToNext.length);
      }
    }
  }
  Object.entries(memo).forEach(([key, value]) => {
    if (value.pos.length <= 2) delete memo[key];
  });
  //   console.log(memo);
  let newTail;
  let pos;
  Object.entries(memo).forEach(([key, value]) => {
    pos = memo[key].pos;
    newTail = pos.length - 1;
    for (let i = 0; i < pos.length; i++) {
      const element = pos[i];
      let newTail2 = pos.length - 1;
      for (let j = i + 1; j < pos.length; j++) {
        if (memo[key][`${element}-${pos[newTail2]}`]) continue;
        const store = str.substring(element - 1, pos[newTail2]);
        memo[key][str.substring(element - 1, pos[newTail2])] = true;
        memo[key][`${element}-${pos[newTail2]}`] = true;
        newTail2--;
        if (reverseFunc(store)) {
          max = Math.max(max, store.length);
        }
      }
    }
  });
  console.log(max);
  return max;
}
console.time();
longestPalindromeSubstr("abracadabra");
longestPalindromeSubstr("lol");
longestPalindromeSubstr("million");
console.timeEnd();
