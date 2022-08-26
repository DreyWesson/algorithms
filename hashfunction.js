function hashFunction(key, maxLen = 10) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
    hash *= hash * key.charCodeAt(i);
    hash %= maxLen;
  }
  console.log(hash);
  return hash;
}

hashFunction("Jacob");
hashFunction("Natalie");
hashFunction("Sara");
hashFunction("Mpho");
hashFunction("Tebogo");
hashFunction("Ron");
hashFunction("Jane");
hashFunction("Maren");
hashFunction("Bill");
