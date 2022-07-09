const scrollCountText = document.getElementById("scroll-count");
const throttleCountText = document.getElementById("throttle-count");
const debounceCountText = document.getElementById("debounce-count");
const debounceRange = document.getElementById("debounce-range");
const throttleRange = document.getElementById("throttle-range");
const debounceTimeText = document.getElementById("debounce-time");
const throttleTimeText = document.getElementById("throttle-time");

let scrollCount = 0;
let throttleCount = 0;
let debounceCount = 0;
let throttleTime = 250;
let debounceTime = 250;
// https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783
debounceRange.addEventListener(
  "input",
  () => {
    debounceTimeText.innerHTML = debounceRange.value;
    debounceTime = debounceRange.value;
  },
  false
);

throttleRange.addEventListener(
  "input",
  () => {
    throttleTimeText.innerHTML = throttleRange.value;
    throttleTime = throttleRange.value;
  },
  false
);

let throttlePause;
let debounceTimer;

const throttle = (callback, time) => {
  if (throttlePause) return;

  throttlePause = true;
  setTimeout(() => {
    callback();
    throttlePause = false;
  }, time);
};

const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

const updateScrollCount = () => {
  scrollCount++;
  scrollCountText.innerHTML = scrollCount;
};

const updateThrottleCount = () => {
  throttleCount++;
  throttleCountText.innerHTML = throttleCount;
};

const updateDebounceCount = () => {
  debounceCount++;
  debounceCountText.innerHTML = debounceCount;
};

window.addEventListener("scroll", () => {
  updateScrollCount();
  throttle(updateThrottleCount, throttleTime);
  debounce(updateDebounceCount, debounceTime);
});
