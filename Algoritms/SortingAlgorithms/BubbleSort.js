// O(n^2)
function bubbleSort(arr){
	let swapCount;
	do{
		swapCount = false;
		for(let i=0; i < arr.length-1; i++ ){
			if(arr[i]>arr[i+1]){
				let tmp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = tmp;
				swapCount = true;
			}
		}
	}
	while(swapCount);
	return arr;
}

let arr = [8, 20, -4, 2, -6];
bubbleSort(arr);
console.log(arr);//[ -6, -4, 2, 8, 20 ]