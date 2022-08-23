var isAnagram = function (s, t) {
  const sort = (str) => [...str].sort().join("");
  s = sort(s);
  t = sort(t);
  return s === t;
};
