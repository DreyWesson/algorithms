/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 0) num /= 2;
    else num -= 1;
    count++;
    if (num === 0) return count;
  }
};

numberOfSteps(8);
