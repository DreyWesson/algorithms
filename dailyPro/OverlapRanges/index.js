function overlapRanges(arr) {
  const range = (min, max) => {
    const newArr = [];
    let init = min;
    while (init < max) {
      init = min++;
      newArr.push(init);
    }
    return newArr;
  };

  const newArr = [...range(arr[0], arr[1]), ...range(arr[2], arr[3])];

  const memo = {};
  const tmp = [];
  for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    memo[element] ? tmp.push(element) : (memo[element] = 1);
  }
  console.log(tmp);
  return tmp.length >= arr[4] ? true : false;
}

console.log(overlapRanges([4, 10, 2, 6, 3])); // [4 5 6]
console.log(overlapRanges([10, 20, 4, 14, 4])); // [10 11 12 13 14]
