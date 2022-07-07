const MyPromise = require("./MyPromise.js");
// const MyPromise = Promise;
// const MyPromise = require("./index.js");

const DEFAULT_VALUE = "default";
const checkFunc = (v) => expect(v).toEqual(DEFAULT_VALUE);
const failFunc = (v) => expect(1).toEqual(2);
const checkFuncUndefined = (v) => expect(v).toBeUndefined();

describe("then", () => {
  it("with no chaining", () => promise().then(checkFunc));

  it("with multiple thens for same promise", () => {
    const mainPromise = promise();
    const promise1 = mainPromise.then(checkFunc);
    const promise2 = mainPromise.then(checkFunc);
    return Promise.allSettled([promise1, promise2]);
  });

  it("with then and catch", () => {
    const resolvePromise = promise().then(checkFunc, failFunc);
    const rejectPromise = promise({ fail: true }).then(failFunc, checkFunc);
    return Promise.allSettled([resolvePromise, rejectPromise]);
  });

  it("with chaining", () => {
    return promise({ value: 3 })
      .then((v) => v * 4)
      .then((v) => expect(v).toEqual(12));
  });
});

describe("catch", () => {
  it("with no chaining", () => promise({ fail: true }).catch(checkFunc));
  it("with multiple catches for same promise", () => {
    const mainPromise = promise({ fail: true });
    const promise1 = mainPromise.catch(checkFunc);
    const promise2 = mainPromise.catch(checkFunc);
    return Promise.allSettled([promise1, promise2]);
  });

  it("with chaining", () => {
    return promise({ value: 3 })
      .then((v) => {
        throw v * 4;
      })
      .catch((v) => expect(v).toEqual(12));
  });
});

describe("finally", () => {
  it("with no chaining", () => {
    const successPromise = promise().finally(checkFuncUndefined);
    const failPromise = promise({ fail: true }).finally(checkFuncUndefined);
    return Promise.allSettled([successPromise, failPromise]);
  });

  it("with multiple finally for same promise", () => {
    const mainPromise = promise();
    const promise1 = mainPromise.finally(checkFuncUndefined);
    const promise2 = mainPromise.finally(checkFuncUndefined);
    return Promise.allSettled([promise1, promise2]);
  });

  it("with chaining", () => {
    const successPromise = promise()
      .then((v) => v)
      .finally(checkFuncUndefined);
    const failPromise = promise({ fail: true })
      .then((v) => v)
      .finally(checkFuncUndefined);
    return Promise.allSettled([successPromise, failPromise]);
  });
});

describe("static methods", () => {
  it("resolve", () => MyPromise.resolve(DEFAULT_VALUE).then(checkFunc));
  it("reject", () => MyPromise.reject(DEFAULT_VALUE).catch(checkFunc));

  describe("all", () => {
    it("with success", () =>
      MyPromise.all([promise({ value: 1 }), promise({ value: 2 })]).then((v) =>
        expect(v).toEqual([1, 2])
      ));
    it("with fail", () =>
      MyPromise.all([promise(), promise({ fail: true })]).catch(checkFunc));
  });

  it("allSettled", () =>
    MyPromise.allSettled([promise(), promise({ fail: true })]).then((v) =>
      expect(v).toEqual([
        { status: "fulfilled", value: DEFAULT_VALUE },
        { status: "rejected", reason: DEFAULT_VALUE },
      ])
    ));

  describe("race", () => {
    it("with success", () =>
      MyPromise.race([promise({ value: 1 }), promise({ value: 2 })]).then((v) =>
        expect(v).toEqual(1)
      ));

    it("with fail", () =>
      MyPromise.race([
        promise({ fail: true, value: 1 }),
        promise({ fail: true, value: 2 }),
      ]).catch((v) => expect(v).toEqual(1)));
  });

  describe("any", () => {
    it("with success", () =>
      MyPromise.any([promise({ value: 1 }), promise({ value: 2 })]).then((v) =>
        expect(v).toEqual(1)
      ));

    it("with fail", () =>
      MyPromise.any([
        promise({ fail: true, value: 1 }),
        promise({ value: 2 }),
      ]).catch((e) => expect(e.errors).toEqual([1, 2])));
  });
});

function promise({ value = DEFAULT_VALUE, fail = false } = {}) {
  return new MyPromise((resolve, reject) =>
    fail ? reject(value) : resolve(value)
  );
}
