function isRotation(str1, str2) {
  if (str1.length !== str2.length) return false;
  let i = 0,
    k = 0,
    result = true;
  const firstIdx = str2.charAt(0),
    str1Len = str1.length,
    tmp2 = str2.substr(1).length;

  for (i; i < str1Len - 1; i++)
    if (firstIdx === str1.charAt(i) && i + 1 === tmp2) break;

  console.log(i);
  for (let j = 0; j < str1Len; j++) {
    const condition1 = j + i < str1Len && str2.charAt(j) !== str1.charAt(j + i);
    const condition2 =
      i + j >= str1Len && str2.charAt(j) !== str1.charAt(k) && k < i;
    if (condition1 || condition2) {
      result = false;
      break;
    }
    if (i + j >= str1Len) k++;
    if (k >= i) break;
  }
  return result;
}
console.log(isRotation("ABBAB", "BABBA"));
console.log(isRotation("ABBA", "BAAB"));
