const needleLen = needle.length;
const strLen = str.length;
if (!needleLen) return 0;
if (needleLen > strLen) return -1;
let tmp = "";
let list = -1;
for (let i = 0; i < strLen; i++) {
  if (str[i] === needle[0]) {
    tmp = str.substr(i, needleLen) === needle && str.substr(i, needleLen);
    if (tmp) {
      list = i;
      break;
    }
  }
}
return list;
