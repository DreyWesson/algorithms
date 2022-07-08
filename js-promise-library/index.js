const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};

class CustomPromise {
  #listThenCallbacks = [];
  #listCatchCallbacks = [];
  #state = STATE.PENDING;
  #value = null;
  #onSuccessBind = this.#onSuccess.bind(this);
  #onFailBind = this.#onFail.bind(this);
  constructors(cb) {
    try {
      cb(this.#onSuccessBind, this.#onFailBind);
    } catch (error) {
      this.#onFailBind(e);
    }
  }
  #runAllCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#listThenCallbacks.forEach((cb) => cb(this.#value));
      this.#listThenCallbacks = [];
    } else if (this.#state === STATE.FULFILLED) {
      this.#listCatchCallbacks.forEach((cb) => cb(this.#value));
      this.#listCatchCallbacks = [];
    }
  }

  #onSuccess(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      if (value instanceof CustomPromise)
        return value.then(this.#onSuccessBind, this.#onFailBind);
      this.#value = value;
      this.#state = STATE.FULFILLED;
      this.#runAllCallbacks();
    });
  }
  #onFail(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      if (value instanceof CustomPromise)
        return value.then(this.#onSuccessBind, this.#onFailBind);
      if (this.#listCatchCallbacks === 0) throw new UncaughtPromiseError(value);
      this.#value = value;
      this.#state = STATE.REJECTED;
      this.#runAllCallbacks();
    });
  }
  then(thenCb, catchCb) {
    return new CustomPromise((resolve, reject) => {
      this.#listThenCallbacks.push((result) => {
        if (!thenCb) {
          return resolve(result);
        }
        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });
      this.#listCatchCallbacks.push((result) => {
        if (!catchCb) {
          return reject(result);
        }
        try {
          resolve(catchCb(result));
        } catch (error) {
          reject(error);
        }
      });
    });
  }
  catch(cb) {
    return this.then(undefined, cb);
  }
  finally(cb) {
    return this.then(
      (result) => {
        cb();
        return resolve(result);
      },
      (result) => {
        cb();
        throw result;
      }
    );
  }

  static resolve(value) {
    return new CustomPromise((resolve, reject) => resolve(value));
  }
  static reject(value) {
    return new CustomPromise((resolve, reject) => reject(value));
  }
  static race(promises) {
    return new CustomPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve).catch(reject);
      });
    });
  }

  static all(promises) {
    const results = [];
    let numOfCompletedPromises = 0;
    return new CustomPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        promise
          .then((value) => {
            results[i] = value;
            numOfCompletedPromises++;
            if (numOfCompletedPromises === promises.length) {
              return resolve(results);
            }
          })
          .catch(reject);
      }
    });
  }

  static allSettled(promises) {
    const results = [];
    let numOfCompletedPromises = 0;
    return new CustomPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        promise
          .then((value) => {
            return (results[i] = { value, status: STATE.FULFILLED });
          })
          .catch((value) => {
            return (results[i] = { value, status: STATE.REJECTED });
          })
          .finally(() => {
            numOfCompletedPromises++;
            if (numOfCompletedPromises === promises.length) {
              return resolve(results);
            }
          });
      }
    });
  }
}

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error);
    this.stack = `(in promise) ${error.stack}`;
  }
}
