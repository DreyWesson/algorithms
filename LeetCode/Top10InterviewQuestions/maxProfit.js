/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let totalProfit = 0,
        tail = 0,
        head = 0;

    while (head < prices.length) {
        if (prices[head] === prices[tail]) head++;
        else if (prices[head] < prices[tail]) tail++;
        else {
            totalProfit += prices[head] - prices[tail];
            tail = head;
            head++;
        }
    }
    return totalProfit;
};
