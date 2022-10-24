function binarySearch(array, target) {
    // Write your code here.
    let tail = 0;
    let head = array.length - 1;
    if (tail > head) return false;
    while (tail <= head) {
        let mid = ((head + tail) / 2) | 0;
        if (array[mid] === target) return mid;
        if (array[mid] > target) head = mid - 1;
        else tail = mid + 1;
    }
    return false;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // undefined
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 9));
