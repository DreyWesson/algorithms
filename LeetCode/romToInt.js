var romToInt = function (nums) {
  // find the length of nums
  // split into 3s into an array
  nums = "" + nums;
  const arr = [];
  let tmp = "";
  let count = 0;
  const dictionary = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  for (let i = nums.length - 1; i >= 0; i--) {
    tmp = nums[i] + tmp;
    count++;
    if (count === 3) {
      arr.push(tmp);
      tmp = "";
    }
  }
  if (tmp.length) arr.push(tmp);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const arrLen = element.length;

    if (arrLen === 3) {
      const leap = element.charAt(0);
    } else if (arrLen === 2) {
    } else {
    }
  }
};

romToInt(185);
