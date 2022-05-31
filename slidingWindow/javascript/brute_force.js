// ==========================================================
// QUESTION:
// Given an array, find the average of all subarrays of ‘K’
// contiguous elements in it.
// ==========================================================
function find_averages_of_subarrays(K, arr) {
  const result = [];
  let totalLoops = 0;
  for (let i = 0; i < arr.length - K + 1; i++) {
    //  i < arr.length - K + 1: loop through arrays
    //  and dont run out of window-rail-line for the window-size(k)
    let sum = 0.0;
    //  find sum of next 'K' elements
    let loop = i;
    totalLoops === 0
      ? console.log("Loop starts")
      : console.log(`Another loop ${loop} bouta start`);

    for (let j = i; j < i + K; j++) {
      // j < i + K: sum from the new window-tail to the window size k
      sum += arr[j];
      totalLoops++;
      console.log({
        i,
        j,
        sum,
        nested_con: i + K,
      });
    }
    // now that we have sum of the subrrray
    // we can push it into our result array
    result.push(sum / K);
  }
  return console.log({
    TotalNumOfLoops: totalLoops,
    TimeComplexity: "O(N*K)",
    result,
  });
}
const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
