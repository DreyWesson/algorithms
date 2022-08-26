/**
 * @param {string} s
 * @return {number}
 */

var maxPower = function (s) {
  let tmp = "";
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    tmp += s[i];
    if (tmp.charAt(0) === s[i]) max = Math.max(max, tmp.length);
    else tmp = s[i];
  }
  return max;
};
