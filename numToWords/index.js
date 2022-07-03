function numToWords(val) {
  const tens = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];

  const hundreds = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
    "hundred",
  ];
  let hundredWords = "";
  let commas = "";
  const commaCounter = ["", "thousand", "million", "trillion"];

  let result = "";

  let hundredsCounter = 0;

  function calcTens(value) {
    let hundredWords = "";
    value = value.length > 2 ? `0${value.substr(1)}` : `0${value}`;
    const temp = value.substr(1);

    const char2 = value.charAt(1),
      char3 = value.charAt(2);
    if (parseInt(temp) < 19) hundredWords += `${tens[temp]}`;
    else hundredWords += `${hundreds[char2]} ${tens[char3]}`;
    return hundredWords;
  }

  let counter = 0;

  if (val.length === 1) return tens[val];
  if (val.length === 2) return calcTens(val);

  for (let i = val.length - 1; i >= 0; i--) {
    counter++;
    const element = val.charAt(i);
    commas = element + commas;
    if (i === 0) {
      if (commas.length === 1)
        return `${tens[commas]} ${commaCounter[hundredsCounter]},  ${result}`;
      if (commas.length === 2)
        return `${calcTens(commas)} ${
          commaCounter[hundredsCounter]
        },  ${result}`;
    }

    if (counter === 3) {
      const char = commas.charAt(0),
        char2 = commas.charAt(1),
        char3 = commas.charAt(2);

      if (parseInt(char) !== 0) {
        hundredWords = tens[char] + " hundred and";
      }

      if (parseInt(char2) === 0 && parseInt(char3) !== 0) {
        hundredWords += ` ${tens[char3]}`;
      } else if (parseInt(char2)) {
        hundredWords += ` ${calcTens(commas)}`;
      }

      result =
        `${hundredWords} ${commaCounter[hundredsCounter]}${
          hundredsCounter > 0 ? ", " : ""
        }` + result;

      counter = 0;
      commas = "";
      hundredWords = "";
      hundredsCounter++;
    }
  }
  return result;
}

console.log(numToWords("1112111"));
