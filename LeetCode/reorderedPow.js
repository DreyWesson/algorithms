/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  if (n === 1) return true;
  let total = 1;
  let i = 1;
  let sortN = n
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .join("");
  while (total.toString().length <= n.toString().length) {
    total = Math.pow(2, i);
    let tmp = total
      .toString()
      .split("")
      .sort((a, b) => a - b)
      .join("");
    if (tmp === sortN) return true;
    i++;
  }
  return false;
};
reorderedPowerOf2(2);
