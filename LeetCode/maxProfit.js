const maxProfit = function (prices) {
  let head = 1,
    max = 0,
    tail = 0;

  while (head < prices.length) {
    const tailVal = prices[tail],
      headVal = prices[head];
    let prevHead = prices[head - 1];
    if (tailVal > headVal) {
      if (prevHead > headVal) tail = head;
      else tail++;
    } else if (tailVal < headVal) {
      let diff = headVal - tailVal;
      if (diff > max) max = diff;
    }
    head++;
  }
  console.log(max);
  return max;
};

maxProfit([7, 1, 5, 3, 6, 4]); // 1 -> 4 = 5
maxProfit([7, 3, 5, 2, 3, 6, 4]); // 3 -> 5 = 4
maxProfit([2, 1, 2, 1, 0, 1, 2]); // 4 > 6 = 2
maxProfit([7, 1, 5, 2, 3, 9, 4]); // 1 > 5 = 8
