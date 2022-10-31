let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
];
/*
  	after the call we should have:
  	Please use array .reduce method in the solution.
  
	usersById = {
		john: {id: 'john', name: "John Smith", age: 20},
		ann: {id: 'ann', name: "Ann Smith", age: 24},
		pete: {id: 'pete', name: "Pete Peterson", age: 31},
	}
*/
function groupById(params) {
    const val = params.reduce((memo, current) => {
        memo[current.id] = current;
        return memo;
    }, {});
    return val;
}

let usersById = groupById(users);
console.log(usersById);
