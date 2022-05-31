import { longWord } from "../utils/longString.js";
function linearSearch(arr, pin) {
  let loops = 0;
  for (let i = 0; i < arr.length; i++) {
    loops++;
    if (arr[i] === pin) {
      return {
        type: "Linear",
        position: i,
        loops,
        result: arr[i],
      };
    }
  }
  return { type: "Linear", loops, result: false };
}

function twoPointerHaystack(arr, pin) {
  let head = arr.length - 1;
  let loops = 0;
  const memo = {
    returnHandler: (pos, res, hunter, loops) => {
      return {
        type: "Two Pointers",
        position: pos,
        loops,
        result: res,
        hunter,
      };
    },
  };
  for (let tail = 0; tail < arr.length; tail++) {
    loops++;
    if (arr[tail] === pin || arr[head] === pin) {
      return memo.returnHandler(
        arr[tail] === pin ? tail : head,
        arr[tail] === pin ? arr[tail] : arr[head],
        arr[tail] === pin ? "tail" : "head",
        loops
      );
    }
    if (tail > head) return memo.returnHandler("None", false, "None", loops);
    head--;
  }
}
// console.log(
//   hayStack(["Looking", "for", "needle", "in", "a", "haystack"], "haystack")
// );

function fourPointersHaystack(arr, pin) {
  if (!pin.length) return false;
  const memo = {
    arrLen: arr.length,
    setMiddle: (end, start) => ((end + start) / 2) | 0,
    returnHandler: (pos, res, hunter, loops) => {
      return {
        type: "Four Pointers",
        position: pos,
        loops,
        result: res,
        hunter,
      };
    },
  };
  let head = memo.arrLen - 1;
  let tail = 0;
  let midTail = memo.setMiddle(head, tail) - 1;
  let midHead = memo.setMiddle(head, tail) + 1;
  let loops = 0;

  for (tail; tail < memo.arrLen; tail++) {
    loops++;
    let mid = memo.setMiddle(head, tail);

    if (arr[mid] === pin)
      return memo.returnHandler(mid, arr[mid], "midldle", loops);

    if (tail < midTail) {
      if (arr[midTail] === pin)
        return memo.returnHandler(midTail, arr[midTail], "mid-tail", loops);
      else midTail -= 1;
    }
    if (midHead < head) {
      if (arr[midHead] === pin)
        return memo.returnHandler(midHead, arr[midHead], "mid-head", loops);
      else midHead += 1;
    }
    const indexCache = { tailVal: arr[tail], headVal: arr[head] };
    if (indexCache.tailVal === pin || indexCache.headVal === pin)
      return memo.returnHandler(
        indexCache.tailVal === pin ? tail : head,
        indexCache.tailVal === pin ? indexCache.tailVal : indexCache.headVal,
        indexCache.tailVal === pin ? `tail ` : `head `,
        loops
      );
    if (tail > midTail && midHead > head)
      return memo.returnHandler("None", false, "None", loops);
    head--;
  }
}
// console.time();
// console.log(linearSearch(longWord.split(" "), "upperoccurrence"));
// console.log(linearSearch(longWord.split(" "), "midupperoccurrence"));
// console.log(linearSearch(longWord.split(" "), "midloweroccurrence"));
// console.log(linearSearch(longWord.split(" "), "loweroccurrence"));
// console.timeEnd();

// console.time
// console.log(twoPointerHaystack(longWord.split(" "), "upperoccurrence"));
// console.log(twoPointerHaystack(longWord.split(" "), "midupperoccurrence"));
// console.log(twoPointerHaystack(longWord.split(" "), "midloweroccurrence"));
// console.log(twoPointerHaystack(longWord.split(" "), "loweroccurrence"));
// console.timeEnd()();;

// console.time();
// console.log(fourPointersHaystack(longWord.split(" "), "upperoccurrence"));
// console.log(fourPointersHaystack(longWord.split(" "), "midupperoccurrence"));
// console.log(fourPointersHaystack(longWord.split(" "), "midloweroccurrence"));
// console.log(fourPointersHaystack(longWord.split(" "), "loweroccurrence"));
// console.log(fourPointersHaystack(longWord.split(" "), "noneexistent"));
// console.timeEnd();

console.time();
// console.log(linearSearch(longWord.split(" "), "noneexistent"));
// console.timeLog();
// console.log(twoPointerHaystack(longWord.split(" "), "noneexistent"));
// console.timeLog();
console.log(fourPointersHaystack(longWord.split(" "), "noneexistent"));
console.timeEnd();
// console.log(linearSearch("abcdefghijklmnopqrstuvwxyz", "i"));
// console.log(twoPointerHaystack("abcdefghijklmnopqrstuvwxyz", "i"));
// // console.log(":::::::::::");

// console.log(fourPointersHaystack("abcdefghijklmnopqrstuvwxyz", "i"));
// // console.log(":::::::::::");
// console.log(linearSearch("abcdefghijklmnopqrstuvwxyz", "z"));
// console.log(twoPointerHaystack("abcdefghijklmnopqrstuvwxyz", "z"));
// console.log(fourPointersHaystack("abcdefghijklmnopqrstuvwxyz", "z"));
