// O(n)
function isPrimeNumber(n){
	if(n <= 1) return false;
	for(let i = 2; i < n; i++){
		if(n%i === 0){
			return false;
		}
	 }
	return true;
}

// O(sqrt(n))
function isPrimeByMath(n){
	if(n <= 1) return false;
	// let root = Math.floor(Math.sqrt(n));
	for(let i = 2; i <= Math.sqrt(n); i++){
		if(n%i === 0){
			return false;
		}
	}
	return true;
}

console.log(isPrimeNumber(5)); // true
console.log(isPrimeNumber(4)); // false
console.log(isPrimeNumber(1)); // false
console.log('');
console.log(isPrimeByMath(5)); // true
console.log(isPrimeByMath(4)); // false
console.log(isPrimeByMath(1)); // false
console.log(isPrimeByMath(37)); // true
console.log(isPrimeByMath(35)); // false