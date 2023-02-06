class Queue{
	constructor(){
		this.items = [];
	}

	enqueque(element){
		this.items.push(element);
	}

	dequeue(){
		// O(n)
		return this.items.shift();
	}

	isEmpty(){
		return this.items.length === 0;
	}

	peek(){
		if(!this.isEmpty()){
			return this.items[0];
		}
		return null;
	}

	size(){
		return this.items.length;
	}

	print(){
		console.log(this.items.toString());
	}
}

const queue = new Queue();
console.log(queue.isEmpty()); //true
queue.enqueque(20);
queue.enqueque(10);
queue.enqueque(30);
console.log(queue.size());//3
queue.print(); // 20, 10, 30
console.log(queue.dequeue()); // 30
console.log(queue.peek()); //10