function solution(A, B) {
  var downStream = [];
  var upStream = [];
  var direction;

  for (var i = 0; i < A.length; i++) {
    direction = B[i];
    console.log("direction: ", direction);
    if (direction === 0) {
      while (downStream.length > 0) {
        var d = downStream.pop();
        console.log(d);
        if (d > A[i]) {
          downStream.push(d);
          console.log("::", downStream);
          break;
        }
      }
      if (downStream.length === 0) {
        upStream.push(A[i]);
        console.log(":", upStream);
      }
    } else {
      downStream.push(A[i]);
      console.log(":::", downStream);
    }
  }
  //   console.log({ downStream, upStream, direction });

  return downStream.length + upStream.length;
}
console.log(solution([4, 1, 2, 3], [0, 1, 0, 0]));
