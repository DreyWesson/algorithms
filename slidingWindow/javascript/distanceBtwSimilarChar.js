function distanceBtwSimilarChar(arr, s) {
  let memo = {};
  let tmp = 0;
  let max = 0;
  let margin = 0;
  for (let head = 0; head < arr.length; head++) {
    const element = arr[head];
    // if current index memo[element][1] is not zero find margin
    if (memo[element]) {
      memo[element][1] = head + 1;
      const firstPos = memo[element][0];
      const newPos = memo[element][1];
      if (newPos !== 0) {
        margin = newPos - tmp;
        memo[element][2] = margin;
        tmp = head - memo[element][2];
      }
    } else {
      memo[element] = [head + 1, 0, 0];
    }
    max = Math.max(memo[element][2], margin);
  }
  console.log(max);
  console.log(memo);
}
