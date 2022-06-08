function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === "") return "";
  else return reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse("str"));
