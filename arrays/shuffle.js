function shuffle(arr) {
    outer: for (let i = 0; i < arr.length; i++) {
        let j = (Math.random() * (i + 1)) | 0;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

shuffle([1, 2, 3]);
