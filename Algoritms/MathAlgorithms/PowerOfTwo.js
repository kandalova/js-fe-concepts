//O(logN)
function isPowerOfTwo(n){
	if(n<1) return false;

	while(n>1){
		if(n%2!==0) {
			return false;
		}
		n = n/2;
	}
	return true;
}

//O (1)
function isPowerOfTwoBetwise(n){
	if(n<1) return false;
	return (n & (n-1)) === 0
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(6)); // fasle
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(9)); // false
console.log(isPowerOfTwo(64)); // true
console.log();
console.log(isPowerOfTwoBetwise(1)); // true
console.log(isPowerOfTwoBetwise(2)); // true
console.log(isPowerOfTwoBetwise(4)); // true
console.log(isPowerOfTwoBetwise(6)); // fasle
console.log(isPowerOfTwoBetwise(8)); // true
console.log(isPowerOfTwoBetwise(9)); // false
console.log(isPowerOfTwoBetwise(64)); // true