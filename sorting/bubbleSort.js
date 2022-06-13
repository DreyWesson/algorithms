function bubble(arr) {
  for (let head = arr.length; head > 0; head--) {
    let swap = true;
    for (let j = 0; j < head - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = false;
      }
      if (swap) break;
    }
  }
  return arr;
}
console.log(bubble([50, 20, 100, 40, 10, 70, 30, 60, 80, 90]));
