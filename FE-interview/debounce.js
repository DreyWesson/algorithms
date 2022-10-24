function debounce(cb, timer = 500) {
    // this works for when u wanna pick the last event example typing => save
    let tag = null;
    return (...args) => {
        clearTimeout(tag);
        tag = setTimeout(() => cb(...args), timer);
    };
}

function throttle(cb, timeout = 300) {
    let wait = false;
    return (...args) => {
        if (wait) return;
        cb(...args);
        wait = true;
        setTimeout(() => (wait = false), timeout);
    };
}
