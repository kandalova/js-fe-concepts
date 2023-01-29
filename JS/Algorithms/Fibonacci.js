// O(n)
function fibonacci (n){
	const fibBase = [0,1];
	const fibBaseLength = fibBase.length;

	for(let i = fibBaseLength; i<n; i++){
		fibBase[i] = fibBase[i-2]+fibBase[i-1];
	}

	return fibBase;
}

console.log(fibonacci(2)); //[0,1]
console.log(fibonacci(3)); //[0,1,1]
console.log(fibonacci(7)); //[0,1,1,2,3,5,8]
console.log(fibonacci(10));