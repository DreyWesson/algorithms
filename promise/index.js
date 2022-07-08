const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};
class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error);
    this.stack = `(in promise) ${error.stack}`;
  }
}

class CustomPromise {
  #state = STATE.PENDING;
  #value = null;
  #thenCbList = [];
  #catchCbList = [];
  #bindOnSuccess = this.#onSuccess.bind(this);
  #bindOnFail = this.#onFail.bind(this);

  constructor(callback) {
    try {
      callback(this.#bindOnSuccess, this.#bindOnFail);
    } catch (error) {
      this.#bindOnFail(error);
    }
  }
  // promise methods
  // => private
  #onSuccess(value) {
    if (this.#state !== STATE.PENDING) return;
    if (value instanceof new CustomPromise())
      return value.then(this.#bindOnSuccess, this.#bindOnFail);
    this.#state = STATE.FULFILLED;
    this.#value = value;
    this.#runCallbacks();
  }
  #onFail(value) {
    if (this.#state !== STATE.PENDING) return;
    if (value instanceof new CustomPromise())
      return value.then(this.#bindOnSuccess, this.#bindOnFail);
    if (this.#thenCbList.length === 0) throw new UncaughtPromiseError(value);
    this.#state = STATE.REJECTED;
    this.#value = value;
    this.#runCallbacks();
  }
  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCbList.forEach((cb) => cb(this.#value));
      this.#thenCbList = [];
    } else if (this.#state === STATE.REJECTED) {
      this.#catchCbList.forEach((cb) => cb(this.#value));
      this.#catchCbList = [];
    }
  }
  // => public
  then(thenCb, catchCb) {
    return new CustomPromise((resolve, reject) => {
      this.#thenCbList.push((result) => {
        if (!thenCb) return resolve(result);
        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(result);
        }
      });
      this.#catchCbList.push((result) => {
        if (!catchCb) return reject(result);
        try {
          resolve(catchCb(result));
        } catch (error) {
          reject(result);
        }
      });
      this.#runCallbacks();
    });
  }
  catch(cb) {
    return this.then(undefined, cb);
  }
  finally(cb) {
    return this.then(
      (result) => {
        cb();
        return result;
      },
      (result) => {
        cb();
        throw result;
      }
    );
  }
  //  => static
  static resolve(value) {
    return new CustomPromise((resolve, reject) => resolve(value));
  }
  static reject(value) {
    return new CustomPromise((resolve, reject) => reject(result));
  }
  static race(promises) {
    return new CustomPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve).catch(reject);
      });
    });
  }
  static all(promises) {
    return new CustomPromise((resolve, reject) => {
      let completedPromises = 0;
      const results = [];
      for (let i = 0; i < promise.length; i++) {
        promise[i]
          .then((result) => {
            completedPromises++;
            results[i] = result;
            if (completedPromises === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      }
    });
  }
  static allSettled(promises) {
    return new CustomPromise((resolve, reject) => {
      let completedPromises = 0;
      const results = [];
      for (let i = 0; i < promise.length; i++) {
        promise[i]
          .then((result) => {
            results[i] = { status: STATE.FULFILLED, result };
          })
          .catch((reason) => {
            results[i] = { status: STATE.REJECTED, reason };
          })
          .finally((cb) => {
            completedPromises++;
            if (completedPromises === promises.length) {
              resolve(results);
            }
          });
      }
    });
  }
  static any(promises) {
    return new CustomPromise((resolve, reject) => {
      let rejectedPromises = 0;
      const errors = [];
      for (let i = 0; i < promise.length; i++) {
        promise[i].then(resolve).catch((result) => {
          rejectedPromises++;
          errors[i] = result;
          if (rejectedPromises === promises.length) {
            reject(new AggregateErrors(errors, "All promises were rejected"));
          }
        });
      }
    });
  }
}
