// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
function moveZeroes(arr) {
  const memo = [];
  const zeroes = [];
  // count every occurrence of 0 and add same to the back of the array
  for (let head = 0; head < arr.length; head++) {
    arr[head] === 0 ? zeroes.push(0) : memo.push(arr[head]);
  }
  console.log(memo.concat(zeroes));
}
moveZeroes([0, 1, 0, 3, 12]);
