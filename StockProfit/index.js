function stockProfit(arr, k) {
  let initPriceIdx = null,
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === k && !initPriceIdx) {
      initPriceIdx = i;
      continue;
    }
    if (!initPriceIdx) continue;
    max = Math.max(max, element);
  }
  if (max - k >= 0) return max - k;
  else return -1;
}

console.log(stockProfit([45, 24, 35, 31, 40, 24, 38, 38], 38));
