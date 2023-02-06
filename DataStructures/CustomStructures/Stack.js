class Stack{
	constructor(){
		this.items = [];
	}

	push(element){
		this.items.push(element);
	}

	pop(){
		return this.items.pop();
	}

	peek(){
		if(!this.isEmpty()){
			return this.items[this.items.length - 1];
		}
		return null;
	}

	isEmpty(){
		return this.items.length === 0;
	}

	size(){
		return this.items.length;
	}

	print(){
		console.log(this.items.toString());
	}
}

const stack = new Stack();
console.log(stack.isEmpty());// true
stack.push(10);
stack.push(30);
stack.push(20);
console.log(stack.size());//3
stack.print();//10,30,20
console.log(stack.pop());//20
console.log(stack.peek());//30