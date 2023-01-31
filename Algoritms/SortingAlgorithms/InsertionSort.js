//O(n^2)
function insertionSort(arr){
	// for(let i = 1; i < arr.length; i++){
	// 	let numberToInsert = arr[i];
	// 	let sortIdx;
	// 	for(sortIdx = i - 1; sortIdx >=0 ; sortIdx--){
	// 		let sortedNumber = arr[sortIdx];
	// 		if(sortedNumber <= numberToInsert){		
	// 			break;
	// 		};
	// 		arr[sortIdx+1] = sortedNumber;
	// 	}
	// 	arr[sortIdx+1] = numberToInsert;
	// }

	for(let i = 1; i < arr.length; i++){
		let numberToInsert = arr[i];
		let sortIdx = i-1;
		while(sortIdx >= 0 && arr[sortIdx] > numberToInsert){
			arr[sortIdx+1] = arr[sortIdx];
			sortIdx--;
		}
		arr[sortIdx+1] = numberToInsert;
	}
}

let arr = [8, 20, -4, 2, -6];
insertionSort(arr);
console.log(arr);//[ -6, -4, 2, 8, 20 ]