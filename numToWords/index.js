import { tens, hundreds, commas } from "./utils.js";

function numToWords(val) {
  let hundredWords = "",
    comma = "",
    result = "",
    commasCounter = 0,
    counter = 0;

  const calcTens = (value) => {
    console.log("::::::", value);
    let hundredWords = "";
    value = value.length > 2 ? `0${value.substr(1)}` : `0${value}`;
    console.log("::::::", value);

    const temp = value.substr(1),
      char2 = value.charAt(1),
      char3 = value.charAt(2);
    if (parseInt(temp) < 19) hundredWords += `${tens[temp]}`;
    else hundredWords += `${hundreds[char2]} ${tens[char3]}`;
    return hundredWords;
  };

  const printResult = (newInput, commaType, prevResult) => {
    console.log({ newInput, commaType, prevResult });
    const checkNewInput = newInput
      ? `${commaType}${commaType && prevResult !== "" ? "," : ""}`
      : "";
    return `${newInput} ${checkNewInput} ${prevResult}`;
  };

  if (val.length === 1) return tens[val];
  if (val.length === 2) return calcTens(val);

  for (let i = val.length - 1; i >= 0; i--) {
    counter++;
    comma = val.charAt(i) + comma;
    if (i === 0) {
      if (comma.length === 1)
        return printResult(tens[comma], commas[commasCounter], result);
      if (comma.length === 2)
        return printResult(calcTens(comma), commas[commasCounter], result);
    }
    if (counter === 3) {
      const char = comma.charAt(0),
        char2 = comma.charAt(1),
        char3 = comma.charAt(2);
      if (parseInt(char) !== 0)
        hundredWords = `${tens[char]} hundred ${
          parseInt(char2) !== 0 || parseInt(char3) !== 0 ? "and " : ""
        }`;
      if (parseInt(char2) === 0 && parseInt(char3) !== 0)
        hundredWords += `${tens[char3]}`;
      else if (parseInt(char2)) hundredWords += `${calcTens(comma)}`;
      result = printResult(hundredWords, commas[commasCounter], result);
      counter = 0;
      comma = "";
      hundredWords = "";
      commasCounter++;
    }
  }
  return result;
}
console.log(numToWords("112000000"));
