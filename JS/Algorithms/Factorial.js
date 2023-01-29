// O(n)
function factorial(n){
	let factorial = 1;
	for(let i = 2; i<=n; i++){
		factorial *= i;
	}
	return factorial;
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(4)); //24
console.log(factorial(5)); //120