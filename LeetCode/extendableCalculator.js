function Calculator() {
    this.signs = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    this.calculate = (str) => {
        const val = str.split(" "),
            a = +val[0],
            b = val[1],
            c = +val[2];
        return this.signs[b](a, c);
    };
    this.addMethod = (op, func) => {
        this.signs[op] = func;
        return this;
    };
}

const calc = new Calculator();
console.log(calc.calculate("38 + 7"));

let powerCalc = new Calculator();
powerCalc
    .addMethod("*", (a, b) => a * b)
    .addMethod("/", (a, b) => a / b)
    .addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8
