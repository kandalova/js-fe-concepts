class Queue{
	constructor(){
		this.items = {};
		this.rare = 0;
		this.front = 0;
	}

	enqueue(element){
		this.items[this.rare] = element;
		this.rare++;
	}

	//O(1)
	dequeue(){		
		if(!this.isEmpty()){
			const item = this.items[this.front];
			delete this.front[this.front];
			this.front++;
			return item;
		}
		return null;
	}

	isEmpty(){
		return this.rare - this.front === 0;
	}

	peek(){
		if(!this.isEmpty()){
			return this.items[this.front];
		}
		return null;		
	}

	size(){
		return this.rare - this.front;
	}

	print(){
		console.log(this.items);
	}
}

const queue = new Queue();
console.log(queue.isEmpty()); //true
queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(30);
console.log(queue.size());//3
queue.print(); // 20, 10, 30
console.log(queue.dequeue()); // 30
console.log(queue.peek()); //10
console.log(queue.size());//2