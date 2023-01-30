//O(logN)
function binarySearch(arr, target){
	let start=0;
	let end = arr.length-1;
	while(end-start>0){
		let middle = start + Math.floor((end-start)/2);
		if(arr[middle] === target) return middle;
		if(arr[middle]>target){
			end = middle-1;
		}
		else{
			start = middle+1;
		}
	}
	return (arr[start] === target) ? start : -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1

//O(logN)
function recursiveBinarySearch(arr, target, start, end){
	if(!start) start = 0;
	if(!end) end = arr.length-1;
	if(start > end) return -1;
	let middle = start + Math.floor((end-start)/2);
	if(arr[middle] === target) return middle;
	if(arr[middle]>target){
		return recursiveBinarySearch(arr, target, start, middle-1);
	}
	return recursiveBinarySearch(arr, target, middle+1, end);
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); //3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); //-1
