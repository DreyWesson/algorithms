const arr = [1, 2, 3, 4, 5];

function logAllPairsOfArr(arr) {
  arr.forEach((element) =>
    arr.forEach((element2) => console.log(element, element2))
  );
}
logAllPairsOfArr(arr);
