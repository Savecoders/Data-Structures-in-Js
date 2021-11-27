class Node {
	constructor(value) {
		this.date = value;
		this.next = null;
	}
}
class mySinglyList {
	constructor(value) {
		this.head = {
			date: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}
	add(value, node) {
		let newNode = new Node(value);
		newNode.next = node.next;
		node.next = newNode;
		this.length++;
	}
	prepend(val) {
		const newNode = new Node(val);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	push() {
		let currentNOde = this.head;
		for (let i = 0; i <= this.length; i++) {
			console.log(currentNOde.date);
			currentNOde = currentNOde.next;
		}
	}
}
const myList = new mySinglyList(2);
const myNode = new Node(1);
myList.head.next = myNode;
myList.add(12, myNode);
myList.prepend(13);
console.log(myList);
myList.push();
