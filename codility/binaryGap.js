// A binary gap within a positive integer N is any maximal sequence of
// consecutive zeros that is surrounded by ones at both ends in the binary
// representation of N. For example, number 9 has binary representation 1001 and
// contains a binary gap of length 2. The number 529 has binary
// representation 1000010001 and contains two binary gaps:
// one of length 4 and one of length 3. The number 20 has binary representation
//  10100 and contains one binary gap of length 1. The number 15 has binary
//  representation 1111 and has no binary gaps. The number 32 has binary
// representation 100000 and has no binary gaps.
// Write a function:
// class Solution { public int solution(int N); }
// that, given a positive integer N, returns the length of its longest
// binary gap. The function should return 0 if N doesn't contain a binary gap.
// For example, given N = 1041 the function should return 5, because N has
// binary representation 10000010001 and so its longest binary gap is of length
//  5. Given N = 32 the function should return 0, because N has binary
// representation '100000' and thus no binary gaps.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..2,147,483,647].

function binaryGap(num, target) {
  const convertToBinary = (num) => {
    return num.toString(2);
  };
  console.log(convertToBinary(num));
  const binary = convertToBinary(num); //110100
  //   const binary = "10000010001";
  const memo = {};
  let prevPosition = 0;
  let currentMax = 0;
  let newMax = 0;
  let diff = 0;
  // accommodate all with [prevPosition, currentMax, newMax]
  for (let head = 0; head < binary.length; head++) {
    if (!memo[binary[head]]) {
      memo[binary[head]] = [head, 0];
    } else {
      if (memo[binary[head]] === memo[target]) {
        prevPosition = memo[binary[head]][0];
        currentMax = memo[binary[head]][1];
        diff = head - (prevPosition + 1);
        newMax = Math.max(diff, currentMax);
        memo[binary[head]][0] = head + 1;
        memo[binary[head]][1] = newMax;
      }
    }
    console.log(memo);
    if (binary.length - 1 === head) {
      console.log(memo[target][1]);
      return +memo[target][1];
    }
  }
}
// binaryGap(529, "1");
binaryGap(52, "1");
// binaryGap(9, "1");
// binaryGap(1041, "1");

// binaryGap(20, "2");
// binaryGap(15, "3");
