/**
 * @param {string[]} strs
 * @return {string}
 */
function compareTwoStr(str1, str2) {
  let minLen = Math.min(str1.length, str2.length);
  let tmp = "";
  for (let i = 0; i < minLen; i++) {
    if (str1[i] !== str2[i]) break;
    tmp += str1[i];
  }
  return tmp;
}
// compareTwoStr("reflower", "flow");
var longestCommonPrefix = function (str) {
  if (str.length === 1) return str[0];
  let tail = 0;
  let result = null;
  for (let head = 1; head < str.length; head++) {
    // console.log();
    result = compareTwoStr(str[tail], str[head]);
    if (!result) return "";
    str[head] = result;
    tail++;
  }
  //   console.log(result);
  return result;
};
