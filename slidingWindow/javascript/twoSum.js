const twoSum = (arr, target) => {
  let result = [];
  let tail = 0,
    sum = 0,
    _twoSum = [];
  const k = 2; // 2-sum

  for (let head = 0; head < arr.length; head++) {
    sum += arr[head];
    result.push(head);
    if (head >= k - 1) {
      if (sum === target) {
        _twoSum.push(result);
        result = [];
      } else {
        result = [head];
      }
      sum -= arr[tail];
      tail += 1;
    }
  }
  return _twoSum;
};
console.log(twoSum([11, -2, 15, 2, 2, 5, 8, 2, 7, 6, 3], 9));
