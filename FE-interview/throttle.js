function throttle(callback, limit) {
  let waiting = false; // Initially, we're not waiting
  return (...args) => {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;
      setTimeout(() => (waiting = false), limit);
    }
  };
}
