const JSONStringify = (obj) => {
  const isArray = (value) => Array.isArray(value) && typeof value === "object";
  const isObject = (value) =>
    typeof value === "object" && value !== null && !Array.isArray(value);
  const isString = (value) => typeof value === "string";
  const isBoolean = (value) => typeof value === "boolean";
  const isNumber = (value) => typeof value === "number";

  // Common check for number, string and boolean value
  const restOfDataTypes = (value) =>
    isNumber(value) || isString(value) || isBoolean(value);

  // Boolean and Number behave in a same way and String we need to add extra qoutes
  if (restOfDataTypes(obj)) {
    const passQuotes = isString(obj) ? `"` : "";
    return `${passQuotes}${obj}${passQuotes}`;
  }

  // This function will be used to remove extra comma from the arrays and object
  const removeComma = (str) => {
    const tempArr = str.split("");
    tempArr.pop();
    return tempArr.join("");
  };

  // Recursive function call for Arrays to handle nested arrays
  if (isArray(obj)) {
    let arrStr = "";
    obj.forEach((eachValue) => {
      arrStr += JSONStringify(eachValue);
      arrStr += ",";
    });
    return `[` + removeComma(arrStr) + `]`;
  }

  // Recursive function call for Object to handle nested Object
  if (isObject(obj)) {
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
};
console.log(JSONStringify(sampleObj));
// console.log(
//   JSON.stringify(sampleObj) === JSONStringify(sampleObj)
//     ? "Test case Passed"
//     : "Test Case Failed"
// );
