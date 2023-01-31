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

// O(2^n)
function recursiveFibonacci(n){
	if(n === 1) {
		return 1;
	}
	if(n < 1) {
		return 0;
	}
	return recursiveFibonacci(n-1)+recursiveFibonacci(n-2);
}

console.log(recursiveFibonacci(0)); //0
console.log(recursiveFibonacci(1)); //1
console.log(recursiveFibonacci(6)); //8

