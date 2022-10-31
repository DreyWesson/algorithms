function shuffle(arr) {
    outer: for (let i = arr.length - 1; i > 0; i--) {
        let j = (Math.random() * (i + 1)) | 0;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

shuffle([1, 2, 3]);
