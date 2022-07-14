// ITERATIVE METHOD
function switchCase(key) {
  const arr = [...key];
  let newKeyName = [],
    tmpStatus;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === "_" || element === "-") {
      tmpStatus = true;
      continue;
    }
    tmpStatus
      ? newKeyName.push(element.toUpperCase())
      : newKeyName.push(element);
    tmpStatus = false;
  }
  return newKeyName.join("");
}
//REGEX METHOD
const toCamel = (str) =>
  str.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace("-", "").replace("_", "")
  );

const keysToCamel = function (obj) {
  const condition = !Array.isArray(obj) && typeof obj === "object";
  if (condition) {
    const tmp = {};
    Object.keys(obj).forEach((k) => (tmp[toCamel(k)] = keysToCamel(obj[k])));
    return tmp;
  } else if (Array.isArray(obj)) return obj.map((i) => keysToCamel(i));
  return obj;
};

const obj2 = {
  hairColor: "brown",
  age: 36,
  great_grand_parent: {
    grand_parent: {
      parent: { children: ["John", "Mary", "evans"] },
    },
  },
};
const obj3 = {
  vt_Core_random: {
    user_details: {
      first_name: "xyz",
      last_name: "abc",
      groups: [
        {
          id: 1,
          group_type: "EXT",
        },
        {
          id: 2,
          group_type: "INT",
        },
      ],
      address_type: {
        city_name: "nashik",
        state: {
          code_name: "MH",
          name: "Maharashtra",
        },
      },
    },
  },
};
console.log(keysToCamel(obj3));
console.log(keysToCamel(obj2));
