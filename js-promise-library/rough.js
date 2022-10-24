const STATE = {
    pending: "Pending",
    fulfilled: "fulfilled",
    rejected: "rejected",
};

class MyPromise {
    #listThenCbs = [];
    #listCatchCbs = [];
    #state = STATE.pending;
    #value = null;
    #onSuccessBind = this.#onSuccess.bind(this);
    #onFailBind = this.#onFail.bind(this);

    constructor(cb) {
        try {
            cb(this.#onSuccessBind, this.#onFailBind);
        } catch (error) {
            this.#onFailBind(e);
        }
    }
    #runCbs() {
        if (this.#state === STATE.fulfilled) {
            this.#listThenCbs.forEach((cb) => cb(this.#value));
            this.#listThenCbs.length = 0;
        } else if (this.#state === STATE.rejected) {
            this.#listCatchCbs.forEach((cb) => cb(this.#value));
            this.#listCatchCbs.length = 0;
        }
    }
    #onSuccess(value) {
        queueMicrotask(() => {
            if (this.#state !== STATE.pending) return;
            if (value instanceof MyPromise)
                return value.then(this.#onSuccessBind, this.#onFailBind);
            this.#state = STATE.fulfilled;
            this.#value = value;
            this.#runCbs();
        });
    }
    #onFail(value) {
        queueMicrotask(() => {
            if (this.#state !== STATE.pending) return;
            if (value instanceof MyPromise)
                return value.then(this.#onSuccessBind, this.#onFailBind);
            if (this.#listCatchCbs.length === 0) {
                new UncaughtPromiseError(value);
            }
            this.#state = STATE.rejected;
            this.#value = value;
            this.#runCbs();
        });
    }
    then(success, failure) {}
}

class UncaughtPromiseError extends Error {
    constructor(error) {
        super(error);
        this.stack = `in promise ${error.stack}`;
    }
}
