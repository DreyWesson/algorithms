const JSONStringify = (obj) => {
  //   if (typeof obj === "function") {
  //     console.log(Object.keys(obj));
  //     return;
  //   }
  const isArray = Array.isArray(obj) && typeof obj === "object";
  const isObject =
    typeof obj === "object" && obj !== null && !Array.isArray(obj);

  // Bool. & Num. behave d same but String needs extra quotes
  if (!(isArray || isObject)) {
    const passQuotes = typeof obj === "string" ? `"` : "";
    return `${passQuotes}${obj}${passQuotes}`;
  }

  // This function will be used to remove extra comma from the arrays and object
  const removeComma = (str) => {
    const tempArr = str.split("");
    tempArr.pop();
    return tempArr.join("");
  };

  // Recursive function call for Arrays to handle nested arrays
  if (isArray) {
    let arrStr = "";
    obj.forEach((eachValue) => {
      arrStr += JSONStringify(eachValue);
      arrStr += ",";
    });
    return `[` + removeComma(arrStr) + `]`;
  }

  // Recursive function call for Object to handle nested Object
  if (isObject) {
    let objStr = "";
    const objKeys = Object.keys(obj);
    objKeys.forEach((eachKey) => {
      const eachValue = obj[eachKey];
      objStr += `"${eachKey}":${JSONStringify(eachValue)},`;
    });
    return `{` + removeComma(objStr) + `}`;
  }
};

const sampleObj = {
  name: "Sid",
  age: 29,
  engineer: true,
  expertise: ["html", "css", "react"],
  address: {
    city: "New york",
    state: "NY",
  },
  print() {
    console.log("hello");
  },
};
console.log(JSONStringify(sampleObj));
console.log(JSON.stringify(sampleObj));
// console.log(
//   JSON.stringify(sampleObj) === JSONStringify(sampleObj)
//     ? "Test case Passed"
//     : "Test Case Failed"
// );
