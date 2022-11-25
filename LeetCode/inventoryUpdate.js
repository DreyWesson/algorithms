function updateInventory(arr1, arr2) {
    const memo = {};
    function addToMemo(arr) {
        for (let i = 0; i < arr.length; i++)
            memo[arr[i][1]]
                ? (memo[arr[i][1]] += arr[i][0])
                : (memo[arr[i][1]] = arr[i][0]);
    }
    for (let i = 0; i < arguments.length; i++) addToMemo(arguments[i]);
    const newShit = Object.keys(memo).sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < newShit.length; i++)
        arr1[i] = [memo[newShit[i]], newShit[i]];
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
