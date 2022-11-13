function sum(a) {
    sum.current = (sum.current ?? 0) + a;
    sum.toString = () => sum.current;
    return console.log(sum);
}
alert(sum(1)(2)); // 3
// console.log( sum(5)(-1)(2) ); // 6
// console.log( sum(6)(-1)(-2)(-3) ); // 0
// console.log( sum(0)(1)(2)(3)(4)(5) ); // 15
