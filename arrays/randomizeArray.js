function randomize() {
    const arr = [1, 2, 3];
    for (let i = 0; i < arr.length; i++) {
        let random = (Math.random() * (i + 1)) | 0;
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr;
}
randomize();
