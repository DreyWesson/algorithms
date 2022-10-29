/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let modulo = numRows * 2 - 1;
    let colCounter = 1;
    let rowCounter = 0;

    let result = "";
    for (let index = 0; index < numRows; index++) {
        const aList = s[index];
        result += aList;

        for (let i = index; i < s.length; i++) {
            const element = s[i];
            if (index === 0 || index === numRows - 1) {
                if (colCounter % modulo === 0) {
                    result += element;
                    colCounter = 1;
                }
            }
            if (colCounter === modulo) {
                console.log(colCounter, modulo);
                result += s[i - rowCounter];
                result += element;

                console.log("::::", s[i - rowCounter], element);
                colCounter = 1;
            }
            colCounter++;
        }
        result += " || ";

        colCounter = 1;
        rowCounter += 2;
    }
    console.log(result);
};

// convert("PAYPALISHIRING", 3); //"PAHN || APLSIIG || YIR"
convert("PAYPALISHIRING", 4); //"PIN || ALSIG || YAHR || PI"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const firstRowHandler = (s, numRows) => {
    const firstRow = numRows * 2 - 2;
    let result = "";
    for (let i = 0; i < s.length; i++) if (i % firstRow === 0) result += s[i];
    return result;
};
const lastRowHandler = (s, numRows) => {
    const lastRowSequence = numRows * 2 - 2;
    let result = "";
    s = s.slice(numRows - 1);
    for (let i = 0; i < s.length; i++)
        if (i % lastRowSequence === 0) result += s[i];
    return result;
};

var convert = function (s, numRows) {
    const firstRow = firstRowHandler(s, numRows);
    const lastRow = lastRowHandler(s, numRows);

    console.log(firstRow);
};

// convert("PAYPALISHIRING", 3); //"PAHN || APLSIIG || YIR"
convert("PAYPALISHIRING", 4); //"PIN || ALSIG || YAHR || PI"
