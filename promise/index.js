// implement a Promise from scratch, implement Promise.all(),
// write a function to limit maximum concurrent Promises
// and multiple questions about code sequencing around Promises
const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};
class MyPromise {
  // create Promise object
  #listThenCallbacks = []; // create a list for all chained then callbacks
  #listCatchCallbacks = []; // create a list for all catch callbacks
  #value = null;
  #state = STATE.PENDING; // initial state of all promises is pending
  constructor(cb) {
    // new Promise(cb) => all promises takes a callback
    try {
      cb(this.#onSuccess, this.#onFail); //fn cb(resolve, reject) => d callbacks takes a resolve & reject arg
    } catch (err) {
      this.#onFail(err);
    }
  }
  #runAllCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#listThenCallbacks.forEach((cb) => cb(this.#value));
      this.#listThenCallbacks = [];
    }
    if (this.#state === STATE.REJECTED) {
      this.#listCatchCallbacks.forEach((cb) => cb(this.#value));
      this.#listCatchCallbacks = [];
    }
  }
  #onSuccess(value) {
    if (this.#state !== STATE.PENDING) return; // if state is not pending its been resolved/rejected
    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#runAllCallbacks();
  }
  #onFail(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.REJECTED;
    this.#runAllCallbacks();
  }
  then(cb) {
    this.#listThenCallbacks.push(cb);
    this.#runAllCallbacks();
  }
  catch(cb) {
    this.#listCatchCallbacks.push(cb);
  }
}
