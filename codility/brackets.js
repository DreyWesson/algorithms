function solution(S) {
  let memo = [];
  function isCondition(memoLength, lastElement, char) {
    return (
      memoLength == 0 ||
      (char === ")" && lastElement !== "(") ||
      (char === "]" && lastElement !== "[") ||
      (char === "}" && lastElement !== "{")
    );
  }
  for (let i in S) {
    let char = S[i];
    if (char === "(" || char === "[" || char === "{") memo.push(char);
    else {
      let memoLength = memo.length;
      const lastElement = memo[memoLength - 1];
      if (isCondition(memoLength, lastElement, char)) return 0;
      memo.pop();
    }
  }
  return memo.length === 0 ? 1 : 0;
}
console.log(solution(")([]())"));
console.log(solution("{[()()]}"));

// function solution(A) {

// 	if (A === "") return 1;
// 	function isAlphaNumericChar(char) {
// 	  return char.match(/[a-zA-Z0-9]/) ? true : false;
// 	}
// 	const memo = {};
// 	const tmp = [];

// 	for (let i = 0; i < A.length; i++) {
// 	  let element = A[i];

// 	  if (!isAlphaNumericChar(element)) {
// 	    const chars = {
// 	      "{": "a1",
// 	      "}": "a2",
// 	      "[": "b1",
// 	      "]": "b2",
// 	      "(": "c1",
// 	      ")": "c2",
// 	    };
// 	    element = chars[A[i]];
// 	    tmp.push(element);
// 	    memo[element] = ++memo[element] || 1;
// 	  }
// 	}

// 	let as = 0,
// 	  bs = 0,
// 	  cs = 0;
// 	for (let i = 0; i < tmp.length; i++) {
// 	  const element = tmp[i];
// 	  const firstElement = tmp[0];
// 	  if (
// 	    (i === 0 && firstElement === "a2") ||
// 	    firstElement === "b2" ||
// 	    firstElement === "c2"
// 	  )
// 	    return 0;
// 	  if (element === "a1" || element === "a2") as++;
// 	  else if (element === "b1" || element === "b2") bs++;
// 	  else cs++;

// 	  if (element === "a1") {
// 	    if (tmp[i + 1] === "b2" || tmp[i + 1] === "c2") return 0;
// 	  } else if (element === "b1") {
// 	    if (tmp[i + 1] === "a2" || tmp[i + 1] === "c2") return 0;
// 	  } else if (element === "c1") {
// 	    if (tmp[i + 1] === "a2" || tmp[i + 1] === "b2") return 0;
// 	  }
// 	}

// 	if (as % 2 === 0 && bs % 2 === 0 && cs % 2 === 0) return 1;
// 	else return 0;
//       }
// console.log(solution(")([]())"));
// console.log(solution("{[()()]}"));

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  const stack = [];
  let head = -1;
  let block = 0;
  let i = 0;
  while (i < H.length) {
    const h = H[i];
    if (head < 0) {
      ++head;
      stack[head] = h; //stack push
      ++i;
    } else if (stack[head] == h) {
      ++i;
    } else if (stack[head] < h) {
      ++head;
      stack[head] = h; //stack push
      ++i;
    } else {
      //stack[head] > h
      --head; //stack pop
      ++block;
    }
  }
  return block + head + 1;
}
