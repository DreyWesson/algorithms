function debounce(cb, timer = 5000) {
  // this works for when u wanna pick the last event example typing => save
  let tag = null;
  return (...args) => {
    clearTimeout(tag);
    tag = setTimeout(() => cb.apply(this, args), timer);
  };
}

function debounce_leading(func, timeout = 300) {
  let tag;
  return (...args) => {
    if (!tag) func.apply(this, args);
    clearTimeout(tag);
    tag = setTimeout(() => (tag = undefined), timeout);
  };
}

// console.log(debounce(() => networkCall())());
