const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const arrLen = array.length;
  for (let i = 0; i < arrLen; i++) {
    // set current index as minimum
    let lowest = i;
    let temp = array[i];
    for (let j = i + 1; j < arrLen; j++) {
      if (array[j] < array[lowest]) lowest = j;
    }
    array[i] = array[lowest];
    array[lowest] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
