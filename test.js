function staircase(n) {
    for (let i = 0; i <= n; i++) console.log(" ".repeat(n - i) + "#".repeat(i));
}
staircase(5);
