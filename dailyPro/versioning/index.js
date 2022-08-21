// Hi, here's your problem today. This problem was recently asked by Amazon:
// Version numbers are strings that are used to identify unique states of software products. A version number is in the format a.b.c.d. and so on where a, b, etc. are numeric strings separated by dots. These generally represent a hierarchy from major to minor changes. Given two version numbers version1 and version2, conclude which is the latest version number. Your code should do the following:
// If version1 > version2 return 1.
// If version1 < version2 return -1.
// Otherwise return 0.
// Note that the numeric strings such as a, b, c, d, etc. may have leading zeroes, and that the version strings do not start or end with dots. Unspecified level revision numbers default to 0.

function version(v1, v2) {
  const boxer = (str) => {
    let arr = [];
    let tmp = "";
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) != ".") tmp += str.charAt(i);
      else {
        arr.push(tmp);
        tmp = "";
      }
    }
    if (tmp) arr.push(tmp);
    return arr;
  };

  let i = 0;
  while (boxer(v1)[i] || boxer(v2)[i]) {
    const ver1 = +boxer(v1)[i] || 0;
    const ver2 = +boxer(v2)[i] || 0;
    console.log({ ver1, ver2 });

    i++;
    if (ver1 > ver2) return 1;
    else if (ver1 < ver2) return -1;
  }
  return 0;
}
// Example:
console.log(version("1.0", "1.0.0")); // 0
console.log(version("1.0.33", "1.0.27")); // 1
console.log(version("0.1.", "1.1")); // -1
console.log(version("1.01", "1.001")); // 0
