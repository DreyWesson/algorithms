// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let i = 0;
    let appleCounter = 0;
    let orangeCounter = 0;
    while (apples[i] || oranges[i]) {
        const apple = apples[i] + a;
        const orange = oranges[i] + b;
        if (apple && apple >= s && apple <= t) appleCounter++;
        if (orange && orange >= s && orange <= t) orangeCounter++;
        i++;
    }
    console.log(`${appleCounter}\n${orangeCounter}`);
}
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
