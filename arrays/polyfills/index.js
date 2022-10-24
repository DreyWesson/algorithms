// map(fn)
Array.prototype.myMap = function (callback) {
    let newArray = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
        let counter = callback(this[i]);
        newArray.push(counter);
    }
    return newArray;
};

// push(val)
Array.prototype.pusher = function (val) {
    this[this.length] = val;
    console.log(this);
};

// pop()
Array.prototype.pops = function () {
    this.length = this.length - 1;
    console.log(this);
};

// reducer(fn,initVal)
Array.prototype.reducer = function (callback, initVal = 0) {
    let accumulator = initVal;
    for (let i = 0; i < this.length; i++)
        accumulator = callback(this[i], accumulator);
    return accumulator;
};

// filter()
Array.prototype.filtrate = function (callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
};

// sort()
Array.prototype.sorter = function () {
    let arr = this;
    function merge(arr1, arr2) {
        const result = [];
        let i = 0,
            j = 0;
        function pusher(element, incrementIOrJ) {
            result.push(element);
            incrementIOrJ === "i" ? i++ : j++;
        }

        while (i < arr1.length && j < arr2.length)
            arr1[i] > arr2[j] ? pusher(arr2[j], "j") : pusher(arr1[i], "i");

        while (i < arr1.length) pusher(arr1[i], "i");

        while (j < arr2.length) pusher(arr2[j], "j");

        return result;
    }
    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        let mid = (arr.length / 2) | 0,
            left = mergeSort(arr.slice(0, mid)),
            right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }
    return mergeSort(arr);
};

let newArr = [1, 2, 3, 4];
newArr = newArr.myMap((e) => e * 2);
newArr.pusher(5);
newArr.pops();
const acc = [10, 20, 30, 40].reducer((v, init) => (init -= v), 0);
console.log([10, 20, 30, 40].filtrate((age) => age >= 18));
console.log(["Banana", "Orange", "Apple", "Mango"].sorter());
