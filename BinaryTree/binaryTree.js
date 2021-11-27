class Node {
	constructor(value) {
		this.data = value;
		this.nodeRight = null;
		this.nodeLeft = null;
	}
}
class BinaryTree {
	constructor() {
		this.root = null;
	}
	insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if (!node.nodeLeft) {
				node.nodeLeft = newNode;
			} else {
				this.insertNode(node.nodeLeft, newNode);
			}
		} else {
			if (!node.nodeRight) {
				node.nodeRight = newNode;
			} else {
				this.insertNode(node.nodeRight, newNode);
			}
		}
	}
	add(value) {
		let newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
		return this;
	}
	printer(rootNode) {
		if (rootNode) {
			console.log(rootNode.data);
			this.printer(rootNode.nodeLeft);
			this.printer(rootNode.nodeRight);
		}
	}
}
const myTree = new BinaryTree();
myTree.add(20);
myTree.add(19);
myTree.add(35);
myTree.printer(myTree.root);
