/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = x < 0 ? true : false;
    x = Math.abs(x);
    x = Array.from(String(x));
    let i = 0;
    let j = x.length - 1;
    while (i <= j) {
        [x[i], x[j]] = [x[j], x[i]];
        j--;
        i++;
    }
    x = Number(x.join(""));
    if (x > 0x7fffffff) return 0;
    return sign ? -x : x;
};
