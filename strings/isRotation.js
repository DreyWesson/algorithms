function isRotation(str1, str2) {
  const firstIdx = str2.charAt(0);

  let i = 0;
  for (i; i < str1.length; i++) if (firstIdx === str1.charAt(i)) break;

  let k = 0;
  let result = true;

  for (let j = 0; j < str1.length; j++) {
    if (str2.charAt(j) !== str1.charAt(j + i) && j + i < str1.length) {
      result = false;
      break;
    }

    if (i + j >= str1.length) {
      if (str2.charAt(j) !== str1.charAt(k) && k < i) {
        result = false;
        break;
      }
      if (k >= i) break;
      k++;
    }
  }
  return result;
}
console.log(isRotation("ABCD", "DABC"));
