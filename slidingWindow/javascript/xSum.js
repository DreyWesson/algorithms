const xSum = (k, arr, target) => {
  let tail = 0,
    sum = 0;
  let result = [];
  const _twoSum = [];
  const memo = [];

  for (let head = 0; head < arr.length; head++) {
    sum += arr[head];
    result.push(head);
    memo.push(head);

    if (head >= k - 1) {
      memo.shift();
      if (sum === target) {
        _twoSum.push(result);
        result = [];
      } else result = [...memo];

      sum -= arr[tail];
      tail += 1;
    }
  }
  return _twoSum;
};
console.log(xSum(3, [3, 3, 3, 11, -2, 15, 2, 2, 5, 8, 2, 7, 6, 3], 9));
console.log(xSum(4, [3, 1, 3, 1, 11, -2, 15, 2, 2, 3, 1, 5, 8, 2, 7, 6, 3], 8));
