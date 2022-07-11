const STATE = {
  fulfilled,
  rejected,
  pending,
};

class CustomPromise {
  #listThenCbs = [];
  #listCatchCbs = [];
  #state = STATE.pending;
  #value = null;
  #bindOnSuccess = this.#onSuccess.bind(this);
  #bindOnFail = this.#onFail.bind(this);

  constructor(cb) {
    try {
      cb(this.#bindOnSuccess, this.#bindOnFail);
    } catch (error) {
      this.#bindOnFail(error);
    }
  }

  #runCallbacks() {
    if (this.#state === STATE.fulfilled) {
      this.#listThenCbs.forEach((cb) => cb(this.#value));
      this.#listThenCbs = [];
    } else if (this.#state === STATE.rejected) {
      this.#listCatchCbs.forEach((cb) => cb(this.#value));
      this.#listCatchCbs = [];
    }
  }

  #onSuccess(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.pending) return;
      if (value instanceof new CustomPromise())
        return value.then(this.#bindOnSuccess, this.#bindOnFail);
      this.#state = STATE.fulfilled;
      this.#value = value;
      this.#runCallbacks();
    });
  }
  #onFail(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.pending) return;
      if (value instanceof new CustomPromise())
        return value.then(this.#bindOnSuccess, this.#bindOnFail);
      if (this.#listCatchCbs.length === 0)
        throw new UncaughtPromiseError(value);
      this.#state = STATE.rejected;
      this.#value = value;
      this.#runCallbacks();
    });
  }
  then(thenCb, catchCb) {
    return new CustomPromise((resolve, reject) => {
      this.#listThenCbs.push((result) => {
        if (!thenCb) return resolve(result);
        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });
      this.#listCatchCbs.push((result) => {
        if (!catchCb) return reject(result);
        try {
          resolve(catchCb(result));
        } catch (error) {
          reject(error);
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
        resolve(result);
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
    return new CustomPromise((resolve, reject) =>
      promises.forEach((promise) => promise.then(resolve).catch(reject))
    );
  }
  static all(promises) {
    const results = [];
    let countResolvedPromises = 0;
    return new CustomPromise((resolve, reject) =>
      promises.forEach((promise, i) =>
        promise
          .then((result) => {
            results[i] = result;
            countResolvedPromises++;
            if (countResolvedPromises === promises.length) resolve(results);
          })
          .catch(reject)
      )
    );
  }
  static allSettled(promises) {
    let completedPromises = 0;
    const results = [];
    return new CustomPromise((resolve, reject) =>
      promises.forEach((promise, i) =>
        promise
          .then((result) => (results[i] = { status: STATE.fulfilled, result }))
          .catch((reason) => (results[i] = { status: STATE.rejected, reason }))
          .finally(() => {
            completedPromises++;
            if (completedPromises === promises.length) resolve(results);
          })
      )
    );
  }
  static any(promises) {
    const errors = [];
    let countRejectedPromises = 0;
    return new CustomPromise((resolve, reject) =>
      promises.forEach((promise) =>
        promise.then(resolve).catch((error) => {
          errors[i] = error;
          countRejectedPromises++;
          if (countRejectedPromises === promises.length)
            return reject(
              new AggregateError(error, "All promises were rejected")
            );
        })
      )
    );
  }
}

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error);
    this.stack = `(in promise) ${error.stack}`;
  }
}
