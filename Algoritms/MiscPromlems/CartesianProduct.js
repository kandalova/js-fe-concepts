// O(n*m)
function cartesianProduct(a, b){
	let result = [];
	for(let i = 0; i < a.length; i ++){
		for(let j = 0; j<b.length; j++){
			result.push([a[i], b[j]])
		}
	}
	return result;
}

const a = [1,2];
const b = [3,4,5];
console.log(cartesianProduct(a,b)); // [[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]