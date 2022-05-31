// ==========================================================
// QUESTION:
// Given an array, find the average of all subarrays of ‘K’
// contiguous elements in it.
// ==========================================================

function sliding_windows(K, arr) {
  const results = [];
  let sum = 0,
    tail = 0,
    loop = 0,
    totalLoops = 0;
  for (let head = 0; head < arr.length; head++) {
    totalLoops++;
    sum += arr[head]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    // K - 1 bcos index starts at 0
    if (head >= K - 1) {
      // windowHead >= K - 1: the equal(=) gets us the window size first
      // then the greater (>) keeps the statement true till the end of the rail-line
      results.push(sum / K); // calculate the average
      sum -= arr[tail]; // subtract the element going out
      tail += 1; // slide the window ahead
      loop++;
    }
  }

  return console.log({
    TotalNumOfLoops: totalLoops,
    TimeComplexity: "O(N)",
    results,
  });
}
sliding_windows(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
