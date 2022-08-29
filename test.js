var removeDuplicates = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) nums[i] = undefined;
  }
  function fn(a) {
    return a !== undefined;
  }
  function filterInPlace(array, fn) {
    let head = 0,
      tail = 0;
    while (head < array.length) {
      if (fn(array[head])) {
        array[tail] = array[head];
        tail++;
      }
      head++;
    }
    console.log(tail, head);
    array.length = tail;
  }
  filterInPlace(nums, fn);
};

removeDuplicates([3, 2, 2, 2, 3], 3);
//                t h
