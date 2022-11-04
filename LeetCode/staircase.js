function staircase(n) {
    for (let i = 0; i < n; i++) {
        return console.log(" ".repeat(n - 1) + "#".repeat(i));
    }
    console.log("/n");
}
staircase(5);
