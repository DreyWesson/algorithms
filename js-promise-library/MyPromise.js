// STEP 1
const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
};
class MyPromise {
    // STEP 2
    #thenCbs = []; // list all chained "then" callbacks ie promise(cb).then(cb).then(cb)
    #catchCbs = []; // list all chained "catch" callbacks ie promise(cb).then(cb).catch()
    #state = STATE.PENDING; //_init_ state of promise is always pending
    #value = null; // that value we are "waiting for" which is currently null cos we don't have it
    #onSuccessBind = this.#onSuccess.bind(this); // bind onSuccess so the context is not lost when passed to the CB in the constructorFn below
    #onFailBind = this.#onFail.bind(this); // bind onFail so the context is not lost when passed to the CB in the constructorFn below

    // STEP 3
    // const promise = new Promise((resolve, reject) => {})
    constructor(cb) {
        try {
            cb(this.#onSuccessBind, this.#onFailBind); // since promise gets a CB with 2 parameters - (resolve,reject)
        } catch (e) {
            this.#onFailBind(e);
        }
    }
    // STEP 6
    #runCallbacks() {
        // Determine which block of code to run using whether STATE is FULFILLED or REJECTED
        if (this.#state === STATE.FULFILLED) {
            this.#thenCbs.forEach((callback) => callback(this.#value)); // pass in the #value we just saved #onSuccess
            this.#thenCbs.length = 0; // clear the list off of cb that has been fulfilled
        } else if (this.#state === STATE.REJECTED) {
            // then run the next CB on the catch list[]
            this.#catchCbs.forEach((callback) => callback(this.#value)); // pass in the #value we just saved #onFail
            this.#catchCbs.length = 0; // clear the list off of cb that has been fulfilled
        }
    }

    // STEP 4
    #onSuccess(value) {
        // to prioritize Promise over setTimeout we use => queueMicrotask wch mimics setTimeout but executes before it
        queueMicrotask(() => {
            if (this.#state !== STATE.PENDING) return;
            // result of a promise can be a value or another new promise and both scenarios needs to be addressed
            // promise.then(()=> new MyPromise(cb))
            // check if value is an instance of MyPromise
            if (value instanceof MyPromise)
                return value.then(this.#onSuccessBind, this.#onFailBind);
            this.#value = value; // now fulfilled update value
            this.#state = STATE.FULFILLED; // update state to fulfilled
            this.#runCallbacks(); // run all the CBs on the then list[]
        });
    }
    // STEP 5
    #onFail(value) {
        // to prioritize Promise over setTimeout we use => queueMicrotask wch mimics setTimeout but executes before it
        queueMicrotask(() => {
            if (this.#state !== STATE.PENDING) return;
            // result of a promise can be a value or another new promise and both scenarios needs to be addressed
            // promise.then(()=> new MyPromise(cb))
            // check if value is an instance of MyPromise
            if (value instanceof MyPromise)
                return value.then(this.#onSuccessBind, this.#onFailBind);
            if (this.#catchCbs.length === 0)
                throw new UncaughtPromiseError(value); // cater for promise whose error was not handled by developers code
            this.#value = value; // now rejected update value
            this.#state = STATE.REJECTED; // update state to rejected
            this.#runCallbacks(); // run all the CBs on the catch list[]
        });
    }

    // promise.then(()=>{'successCB'},()=>{FailCB})
    then(thenCb, catchCb) {
        // make then CHAINABLE by returning new promise
        return new MyPromise((resolve, reject) => {
            this.#thenCbs.push((result) => {
                if (!thenCb) return resolve(result); // skips to next promise if 1st arg is not passed ie this.then(undefined,cb) mimicking catch behavior
                try {
                    resolve(thenCb(result)); // it passes result of promise to the next then in the chain
                } catch (error) {
                    reject(error);
                }
            });
            this.#catchCbs.push((result) => {
                if (!catchCb) return reject(result); // if I don't care about the result of this promise , then move on to the next promise
                try {
                    resolve(catchCb(result)); // it passes result of promise to the next then in the chain
                } catch (error) {
                    reject(error);
                }
            });
            this.#runCallbacks();
        });
    }
    catch(cb) {
        return this.then(undefined, cb); // we pass nothing to the successCB but pass the failCB as 2nd ARG.
    }

    finally(cb) {
        return this.then(
            (result) => {
                // finally doesn't get any value passed to it
                // it passes the result from a then to the next then
                // ie new MyPromise(cb).then(cb).finally(cb).then(cb)
                cb();
                return result;
            },
            (result) => {
                cb();
                throw result;
            }
        );
    }

    static resolve(value) {
        return new Promise((resolve, reject) => resolve(value));
    }

    static reject(value) {
        return new Promise((resolve, reject) => reject(value));
    }

    static race(promises) {
        // returns the 1st promise to resolve/reject
        return new MyPromise((resolve, reject) =>
            promises.forEach((promise) => promise.then(resolve).catch(reject))
        );
    }
    // receives arr of promises and returns arr of resolved result
    // Promise.all([promise1, promise2, promise3]).then((val[]) => val[]).catch();
    static all(promises) {
        const results = []; // takes a list of resolved values
        let numOfCompletedPromises = 0;
        return new MyPromise((resolve, reject) => {
            // loop thru promises
            promises.forEach((promise, i) => {
                promise
                    .then((value) => {
                        results[i] = value;
                        numOfCompletedPromises++;
                        if (numOfCompletedPromises === promises.length)
                            return resolve(results);
                    })
                    .catch(reject);
            });
        });
    }

    static allSettled(promises) {
        // allSettled should return {"status, resolved value/failure reason"}
        const results = [];
        let numOfCompletedPromises = 0;
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise, i) => {
                promise
                    .then(
                        (value) =>
                            (results[i] = { status: STATE.FULFILLED, value })
                    )
                    .catch(
                        (reason) =>
                            (results[i] = { status: STATE.REJECTED, reason })
                    )
                    .finally(() => {
                        numOfCompletedPromises++;
                        if (numOfCompletedPromises === promises.length)
                            return resolve(results);
                    });
            });
        });
    }

    static any(promises) {
        // returns the 1st promise to resolve and doesn't return
        // fail except all the list of promises failed
        const errors = [];
        let rejectedPromises = 0;
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise, i) => {
                promise.then(resolve).catch((error) => {
                    errors[i] = error;
                    rejectedPromises++;
                    if (rejectedPromises === promises.length)
                        return reject(
                            new AggregateError(
                                errors,
                                "All promises are rejected"
                            )
                        );
                });
            });
        });
    }
}
class UncaughtPromiseError extends Error {
    constructor(error) {
        super(error);
        this.stack = `(in promise) ${error.stack}`;
    }
}
const DEFAULT_VALUE = "default";
const checkFunc = (v) => expect(v).toEqual(DEFAULT_VALUE);
const failFunc = (v) => expect(1).toEqual(2);
const checkFuncUndefined = (v) => expect(v).toBeUndefined();
function promise({ value = DEFAULT_VALUE, fail = false } = {}) {
    return new MyPromise((resolve, reject) =>
        fail ? reject(value) : resolve(value)
    );
}

// initialize promise
const p = promise({ value: "Initialized MyPromise class" });
const p2 = promise({ value: "tryout fail" }, true);
const p3 = promise({ value: "Another one - DJ Khalid" });

// tryout then without chaining
p.then((val) => console.log(val));

// tryout fail
p2.then((p) => console.log(p));

// tryout multiple then(s)
p.then((val) => ({ init: val, then_1: "multiple then(s): 1" })).then((val) =>
    console.log({
        ...val,
        then_2: "multiple then(s): 2",
    })
);

module.exports = MyPromise;
