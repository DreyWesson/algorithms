/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let horizontal = {};
    const vertical = {};
    const grids = new Array(9).fill("");
    let m = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== ".") {
                if (horizontal[board[i][j]]) return false;
                horizontal[board[i][j]] = 1;
                vertical[j] && vertical[j].length > 0
                    ? (vertical[j] += board[i][j])
                    : (vertical[j] = "" + board[i][j]);

                if (j < 3) grids[0 + m] += board[i][j];
                else if (j > 2 && j < 6) grids[1 + m] += board[i][j];
                else if (j > 5 && j < 9) grids[2 + m] += board[i][j];
            }
        }
        if ((i + 1) % 3 === 0) m += 3;
        horizontal = {};
    }

    var containsDuplicate = function (nums) {
        const memo = {};
        for (let i = 0; i < nums.length; i++) {
            if (memo[nums[i]]) return true;
            else memo[nums[i]] = true;
        }
        return false;
    };

    for (const key in vertical) {
        if (Object.hasOwnProperty.call(vertical, key))
            if (containsDuplicate(vertical[key])) return false;
    }
    for (let i = 0; i < grids.length; i++)
        if (containsDuplicate(grids[i])) return false;
    return true;
};

let arr = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."], // 0 ....
    ["6", ".", ".", "1", "9", "5", ".", ".", "."], // 1
    [".", "9", "1", ".", ".", ".", ".", "6", "."],
    ["1", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
let arr2 = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
];
console.log(isValidSudoku(arr));
