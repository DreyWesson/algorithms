// implement a Promise from scratch, implement Promise.all(),
// write a function to limit maximum concurrent Promises
// and multiple questions about code sequencing around Promises
class MyPromise {
  constructor(cb) {
    try {
      cb(this.#onSuccess, this.#onFail);
    } catch (err) {
      this.#onFail(err);
    }
  }
  #onSuccess() {}
  #onFail() {}
  then(cb) {}
  catch(cb) {}
}
// const promise = new MyPromise();

// promise.;
