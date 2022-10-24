// function solution(inputArray) {
//     let i = 0,
//         j = 1,
//         max = null;
//     while (j < inputArray.length) {
//         const prod = inputArray[i] * inputArray[j];
//         if (!max) max = prod;
//         max = Math.max(max, prod);
//         i++;
//         j++;
//     }
//     console.log(max);
//     return max;
// }
// solution([-23, 4, -3, 8, -12]);

// function solution(a) {
//     if (!Array.isArray(a)) return;
//     let arr = [];
//     for (let i = 0; i < a.length; i++) {
//         let element = a[i].toString();
//         element = element.split("");
//         arr = [...arr, ...element];
//     }

//     const memo = {};
//     let max = null;
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (memo[element]) {
//             memo[element]++;
//         } else {
//             memo[element] = 1;
//         }
//         if (!max) max = 1;
//         max = Math.max(memo[element], max);
//     }
//     arr = [];
//     for (let key in memo) {
//         const val = +memo[key];
//         if (max === val) {
//             arr.push(+key);
//         }
//     }
//     arr = arr.sort((a, b) => a - b);
//     return arr;
// }
