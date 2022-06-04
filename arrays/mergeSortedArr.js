function sortArr(arr1, arr2) {
  if (arr1[0] > arr2[arr2.length - 1]) return [...arr2, ...arr1];
  else if (arr2[0] > arr1[arr1.length - 1]) return [...arr1, ...arr2];

  let sorted = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || !arr1Item || arr1Item < arr2Item) {
      sorted.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      sorted.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return sorted;
  // newArr.sort((a, b) => a - b);
  // return newArr;
}
// console.log(sortArr([4, 5, 6], [1, 2, 3]));
console.log(sortArr([4, 17], [1, 2, 12]));
