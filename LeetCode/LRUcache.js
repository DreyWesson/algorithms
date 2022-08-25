// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.
// Example 1:
// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]
// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.value = {};
  this.cache = [];
  this.rotate = this.capacity - 1;
  this.counter = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  console.log(
    this.cache.includes(key) ? this.value[key] : -1,
    "::",
    this.cache,
    "::",
    this.value
  );
  return this.cache.includes(key) ? this.value[key] : -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.value[key] = value;
  //   if (this.counter > this.capacity) delete this.value[this.cache[this.rotate]];
  if (this.counter >= this.capacity) {
    delete this.value[this.cache[this.rotate]];
    this.cache.splice(this.rotate, 1);
  }
  this.rotate--;
  this.counter++;
  this.cache.push(key);
  if (this.rotate < 0) this.rotate = 0;
};

// const newLru = new LRUCache(2);
// newLru.put(1, 1);
// newLru.put(2, 2);
// newLru.put(3, 3);
// newLru.put(4, 4);
// newLru.put(5, 5);
// newLru.put(6, 0);
// newLru.put(7, 7);
// newLru.get(6);
// console.log(newLru);

let newClass = null;
const actions = [
  ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
  ["LRUCache", "put", "put", "get", "put", "put", "get"],
  ["LRUCache", "put", "put", "put", "put", "get", "get"],
  ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
];
const values = [
  [[2], [1, 0], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
  [[2], [2, 1], [2, 2], [2], [1, 1], [4, 1], [2]],
  [[2], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2]],
  [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
];

function args(actions, values) {
  let i = 0;
  if (actions.length === values.length) {
    while (i < actions.length) {
      const val = values[i];
      if (actions[i] === "LRUCache") newClass = new LRUCache(values[i]);
      else if (actions[i] === "put") newClass["put"](val[0], val[1]);
      else if (actions[i] === "get") newClass["get"](val[0]);

      i++;
    }
  }
}
args(actions[3], values[3]);
// console.log(newClass);
