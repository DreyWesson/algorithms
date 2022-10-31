function camelize(str) {
    let next = false;
    let newStr = "";
    for (let index = 0; index < str.length; index++) {
        const elem = str[index];
        if (elem === "-") {
            next = true;
            continue;
        }
        if (!next) newStr += elem;
        else {
            newStr += elem.toUpperCase();
            next = false;
        }
    }
    return newStr;
}
// camelize("background-color") //== 'backgroundColor';
// camelize("list-style-image") //== 'listStyleImage';
camelize("-webkit-transition"); //== 'WebkitTransition';
