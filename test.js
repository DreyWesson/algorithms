/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/
 * @param {character[][]} board
 * @return {boolean}
 */

// var isValidSudoku = function (board) {
//     const set = new Set();
//     // (m)v, v(n), (m)v(n)
//     for (let m = 0; m < board.length; m++) {
//         for (let n = 0; n < board[m].length; n++) {
//             const item = board[m][n];
//             if (item === ".") continue;
//             const row = `(${m})${item}`;
//             const col = `${item}(${n})`;
//             const rc = `(${~~(m / 3)})${item}(${~~(n / 3)})`;
//             if (!set.has(row) && !set.has(col) && !set.has(rc)) {
//                 set.add(row);
//                 set.add(col);
//                 set.add(rc);
//             } else {
//                 return false;
//             }
//         }
//     }
//     return true;
// };
