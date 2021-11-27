class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	peek() {
		return this.top;
	}
	lastStack() {
		return this.bottom;
	}
	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdPinter = this.top;
			this.top = newNode;
			this.top.next = holdPinter;
		}
		this.length++;
		return this;
	}
}
const myStack = new Stack();
myStack.push(12);
myStack.push(8);

console.log(myStack.peek());
console.log(myStack.lastStack());
//crear metodo pop
