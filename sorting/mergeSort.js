function merge(list1, list2) {
  let results = [];
  let i = 0;
  let j = 0;
  function pusher(index, incrementIOrJ = "j") {
    results.push(index);
    incrementIOrJ === "i" ? i++ : j++;
  }
  while (i < list1.length && j < list2.length)
    list2[j] > list1[i] ? pusher(arr1[i], "i") : pusher(arr2[j]);
  while (i < list1.length) pusher(arr1[i], "i");
  while (j < list2.length) pusher(arr2[j]);
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
