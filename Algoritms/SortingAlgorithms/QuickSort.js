//O(n^2) - worst (when arr alresdy sort)
//O(nLogN) - avg
// here is also needed space
function quickSort(arr){
	if(arr.length <=1) return arr;
	let pivot = arr[arr.length-1];
	let left = [];
	let right = [];
	for(let i = 0; i<arr.length-1; i++){
		if(arr[i] <= pivot){
			left.push(arr[i]);
		}
		else{
			right.push(arr[i]);
		}
	}
	// left = quickSort(left);
	// right = quickSort(right);
	// return (left).concat([pivot], right);
	return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [8, 20, -4, 2, -6];
arr = quickSort(arr);
console.log(arr);//[ -6, -4, 2, 8, 20 ]