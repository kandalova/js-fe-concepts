// O(n)
function climbingStairCase(n){
	noOfWays = [1,2];
	for(let i = 2; i < n; i++){
		noOfWays[i] = noOfWays[i-1]+noOfWays[i-2];
	}

	return noOfWays[n-1];
}

console.log(climbingStairCase(1)); //1
console.log(climbingStairCase(2)); //2
console.log(climbingStairCase(3)); //3
console.log(climbingStairCase(4)); //5
console.log(climbingStairCase(5)); //8