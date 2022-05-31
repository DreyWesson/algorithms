function test1(cardNumber, total = 0, firstCardDigit = 0, firstTwoDigits = 0) {
  if (cardNumber.length < 14) return "Invalid Card";

  for (let index = cardNumber.length - 1; index >= 0; index--) {
    firstCardDigit = cardNumber[0];
    firstTwoDigits = `${cardNumber[0]}${cardNumber[1]}`;
    if ((cardNumber.length - index) % 2 === 0) {
      const value = cardNumber[index] * 2;
      if (value < 10) total += value;
      else total += Math.floor(value / 10) + (value % 10);
    } else if ((cardNumber.length - index) % 2 > 0) total += +cardNumber[index];
  }

  const isValid = total % 10 === 0 ? true : false;

  if (!isValid) return "Invalid Card";
  else if (isValid) {
    firstCardDigit = +firstCardDigit;
    firstTwoDigits = +firstTwoDigits;

    const visaCard =
      cardNumber.length === 13 ||
      (cardNumber.length === 16 && firstCardDigit === 4);
    const masterCard =
      cardNumber.length === 16 ||
      (firstTwoDigits >= 51 && firstTwoDigits <= 55);
    const americanExpressCard =
      cardNumber.length === 15 &&
      (firstTwoDigits === 34 || firstTwoDigits === 37);

    if (visaCard) return "This is visa card";
    else if (masterCard) return "This is master card";
    else if (americanExpressCard) return "This is American Express Card";
  }
}
// console.log(test1("4003600000000014"));

const test = (arr, k, target) => {
  let sum = 0;
  let tail = 0;

  for (let head = 0; head < arr.length; head++) {
    sum += arr[head];
    if (head >= k - 1) {
      if (sum === target) return true;
      sum -= arr[tail];
      tail += 1;
    }
  }
};
console.log(test([1, 2, 3, 4, 4], 2, 8));
