// O(2^n)
function towerOfHanoi(n, fromRoad, toRoad, usingRoad){
	if(n===1){
		console.log(`Move disk 1 from ${fromRoad} to ${toRoad}`);
		return;
	}
	towerOfHanoi(n-1, fromRoad, usingRoad, toRoad);
	console.log(`Move disk ${n} from ${fromRoad} to ${toRoad}`);
	towerOfHanoi(n-1, usingRoad, toRoad, fromRoad);
}

towerOfHanoi(4, 'A', 'C', 'B');