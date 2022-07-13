const obj = [
  { name: "2pac", age: 47, wealth: { balance: 111110000 } },
  { name: "Whitney", age: 32, wealth: { balance: 10000 } },
  { name: "Kanye", age: 35, wealth: { balance: 110000 } },
  { name: "Anonymous", age: 200, wealth: { balance: 1111110000 } },
  { name: "Jay-z", age: 50, wealth: { balance: 1110000 } },
  { name: "Michael", age: 50, wealth: { balance: 11110000 } },
];

const customSort = (key) => {
  const path = key.split(".");
  function handlePath(obj) {
    let tmp = [];
    for (let i = 0; i < path.length; i++) {
      const element = path[i];
      if (i === 0) tmp = obj[element] || undefined;
      else tmp = tmp[element] || undefined;
      if (!tmp) break;
    }
    console.log("::", tmp ? tmp : undefined);
    return tmp ? tmp : undefined;
  }
  return (a, b) => {
    a = handlePath(a);
    b = handlePath(b);
    return a > b ? 1 : a < b ? -1 : 0;
  };
};
// console.log(obj);
console.log(obj.sort(customSort("wealth.balance")));
