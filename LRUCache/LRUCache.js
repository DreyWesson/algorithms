function LRUCache(strArr, n) {
    const cache = [];
    const dictionary = {};
    let min = Infinity;
    let tmp = "";

    for (let i = 0; i < strArr.length; i++) {
        const element = strArr[i];
        if (!dictionary[element]) {
            dictionary[element] = 1;
            if (cache.length < n) {
                cache.push(element);
            } else {
                // pop minimum occurrence
                Object.keys(dictionary).forEach((key) => {
                    const val = dictionary[key];
                    if (min > val) {
                        min = Math.min(val, min);
                        tmp = key;
                    }
                });
                cache.splice(cache.indexOf(tmp), 1);
                cache.push(element);
            }
        } else {
            dictionary[element] += 1;
            cache.splice(cache.indexOf(element), 1);
            cache.push(element);
        }
    }
    console.log(cache);
    console.log(dictionary);
}
// LRUCache(["a", "b", "c", "d", "e", "a", "d", "c", "f"]);
LRUCache([1, 2, 3, 1, 4, 5], 4);
