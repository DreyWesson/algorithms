/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length < numRows) return s;

    let rows = new Array(numRows).fill(""),
        converted = "",
        reverse = false,
        count = 0;

    for (let i = 0; i < s.length; i++) {
        rows[count] += s[i];
        reverse ? count-- : count++;
        (count === numRows - 1 || count === 0) && (reverse = !reverse);
    }
    return rows.join("");
};

// convert("PAYPALISHIRING", 3); //"PAHN || APLSIIG || YIR"
convert("PAYPALISHIRING", 4); //"PIN || ALSIG || YAHR || PI"
