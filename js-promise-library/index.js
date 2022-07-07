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
  #thenCbs = []; // create a list for all chained then callbacks
  #catchCbs = []; // create a list for all catch callbacks
  #state = STATE.PENDING; // initial state of all promises is pending
  #value;
  #onSuccessBind = this.#onSuccess.bind(this);
  #onFailBind = this.#onFail.bind(this);

  constructor(cb) {
    // new Promise(cb) => all promises takes a callback
    try {
      cb(this.#onSuccessBind, this.#onFailBind); //fn cb(resolve, reject) => d callbacks takes a resolve & reject arg
    } catch (err) {
      this.#onFail(err);
    }
  }
  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCbs.forEach((callback) => {
        callback(this.#value);
      });
      this.#thenCbs = [];
    }
    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach((callback) => {
        callback(this.#value);
      });
      this.#catchCbs = [];
    }
  }
  #onSuccess(value) {
    if (this.#state !== STATE.PENDING) return; // if state is not pending its been resolved/rejected
    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#runCallbacks();
  }
  #onFail(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.REJECTED;
    this.#runCallbacks();
  }
  then(thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.#thenCbs.push((result) => {
        if (thenCb == null) {
          resolve(result);
          return;
        }
        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#catchCbs.push((result) => {
        if (catchCb == null) {
          reject(result);
          return;
        }
        try {
          reject(catchCb(result));
        } catch (error) {
          reject(error);
        }
      });
    });
    // if (this.#thenCbs !== null) this.#thenCbs.push(cb);
    // if (this.#catchCbs !== null) this.#catchCbs.push(cb);
    // this.#runCallbacks();
  }
  catch(cb) {
    this.#thenCbs(undefined, cb);
  }
}
