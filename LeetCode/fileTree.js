const tree = {
    children: [
        {
            node: "node_modules",
            children: [
                { node: "Joi" },
                {
                    node: "index.js",
                    children: [
                        { node: "nested" },
                        {
                            node: "nested",
                        },
                    ],
                },
            ],
        },
        { name: "package.json" },
        { name: "index.html" },
    ],
};

function printChildren(tree, nest = -1) {
    Object.values(tree).forEach((val) => {
        if (Array.isArray(val)) {
            nest += 1;
            for (let i = 0; i < val.length; i++) printChildren(val[i], nest);
        } else {
            console.log("".padEnd(nest * 2, " ") + val);
        }
    });
}
printChildren(tree);
