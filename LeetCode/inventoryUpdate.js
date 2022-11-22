function updateInventory(arr1, arr2) {
    const memo = {};
    function addToMemo(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            if (memo[arr[i][1]]) {
                memo[arr[i][1]] += arr[i][0];
            } else {
                memo[arr[i][1]] = arr[i][0];
            }
        }
    }
    addToMemo(arr1);
    addToMemo(arr2);

    const newShit = Object.keys(memo).sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < newShit.length; i++) {
        const element = newShit[i];
        arr1[i] = [memo[element], element];
    }
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
