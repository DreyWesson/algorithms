function zigzag(numbers) {
    let head = 2;
    let tail = 0;
    let arr = [];
    for (let i = 1; i < numbers.length; i++) {
        if (head === numbers.length) break;
        const mid = numbers[i];
        if (
            (numbers[tail] < mid && mid > numbers[head]) ||
            (numbers[tail] > mid && mid < numbers[head])
        )
            arr.push(1);
        else arr.push(0);
        tail++;
        head++;
    }
    console.log(arr);
    return arr;
}

zigzag([1, 2, 1, 4, 6]); // [1,1,0]
