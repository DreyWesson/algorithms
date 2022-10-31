function Calculator() {
    this.calculate = (str) => {
        const val = str.split(" ");
        let ans = 0;
        for (let index = 0; index < val.length; index++) {
            const tail = index;
            const mid = index + 1;
            const head = index + 2;

            let el = +val[tail];
            let el2 = +val[head];

            if (val[mid] === "+") {
                ans += el + el2;
            } else if (val[mid] === "-") {
                ans += el - el2;
            } else if (val[mid] === "*") {
                ans += el * el2;
            } else if (val[mid] === "/") {
                ans += el / el2;
            }
        }
        console.log(ans);
        return ans;
    };
}

const calc = new Calculator();
console.log(calc.calculate("38 + 7"));
