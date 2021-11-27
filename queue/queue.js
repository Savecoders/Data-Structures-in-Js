class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	enqueue(val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
	}
	lastElement() {
		return this.last;
	}
	peek() {
		return this.first;
	}
	dequeeu() {
		if (this.length === 0) {
			console.error('no hay elementos');
		} else if (this.length === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
		}
		this.length--;
		return this;
	}
}
const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.dequeeu();
console.log(myQueue.peek());
console.log(myQueue.lastElement());
