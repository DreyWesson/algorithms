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
    i++;
    if (ver1 > ver2) return 1;
    else if (ver1 < ver2) return -1;
  }
  return 0;
}
console.log(version("1.0", "1.0.0"));
