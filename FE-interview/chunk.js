function chunks(array, size) {
    const result = [];
    array.forEach((element, i) =>
        i % size
            ? result[result.length - 1].push(element)
            : result.push([element])
    );
    return result;
}
chunks(["a", "b", "c", "d", "e", "f", "g", "h", "i"], 2);
