// ==========================================================
// Question:
// Write a function called averagePair. Given a sorted array
// of integers and a target average, determine if there is a
// pair of values in the array where the average of the pair
// equals the target average. There may be more than one pair
// that matches the average target.
// ==========================================================
function averagePair(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  let head = arr.length - 1;
  let sum = 0;
  let avg = 0;
  for (let tail = 0; tail < arr.length; tail++) {
    sum = arr[tail] + arr[head];
    avg = sum / 2;
    if (avg === target) return true;
    else if (avg > target) head--;
  }
  return false;
}
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
averagePair([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0); // true
