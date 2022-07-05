function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  function pusher(index, incrementIOrJ) {
    results.push(index);
    incrementIOrJ === "i" ? i++ : j++;
  }
  while (i < arr1.length && j < arr2.length)
    arr2[j] > arr1[i] ? pusher(arr1[i], "i") : pusher(arr2[j], "j");
  while (i < arr1.length) pusher(arr1[i], "i");
  while (j < arr2.length) pusher(arr2[j], "j");
  return results;
}

// Recursive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([100, 24, 10, 76, 73]));
console.log(mergeSort(["Banana", "Orange", "Apple", "Mango"]));
