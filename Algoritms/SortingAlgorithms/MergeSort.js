function firstMergeSort(arr){
	console.log(Array.from(arr, x => [x]));
	let elementsArray = Array.from(arr, x => [x]);
	while(elementsArray.length > 1){
		if(elementsArray.length>=4){
			let lastIndex = elementsArray.length-1;
			let newArr = concatSortedParts(elementsArray[lastIndex], elementsArray[lastIndex-1]);
			elementsArray.splice(lastIndex-1, 2, newArr);
		}
		let newArr = concatSortedParts(elementsArray[0], elementsArray[1]);
		elementsArray.splice(0, 2, newArr);
	}
	return elementsArray.flat();
}

function concatSortedParts(left, rigth){
	let result = [];
	let leftStart=0;
	let rightStart=0;
	while(result.length < left.length+rigth.length){
		if(leftStart===left.length) return [...result, ...rigth.slice(rightStart)];
		if(rightStart===rigth.length) return [...result, ...left.slice(leftStart)];
		if(left[leftStart] <= rigth[rightStart]){
			result.push(left[leftStart]);
			leftStart++;
		}
		else{
			result.push(rigth[rightStart])
			rightStart++;
		}
	}
	return result;
}

//O(nLogN)
function mergeSort(arr){
	if(arr.length<2) return arr;
	const mid = Math.floor(arr.length / 2);
	const arrLeft = arr.slice(0, mid);
	const arrRight = arr.slice(mid);
	return merge(mergeSort(arrLeft), mergeSort(arrRight))
}

function merge(leftArr, rightArr){
	let result = [];
	while (leftArr.length && rightArr.length){
		if(leftArr[0] <= rightArr[0]){
			result.push(leftArr.shift());
		}
		else{
			result.push(rightArr.shift());
		}
	}
	return [...result, ...leftArr, ...rightArr];
}

let arr = [8, 20, -4, 2, -6];
console.log(mergeSort(arr));//[ -6, -4, 2, 8, 20 ]