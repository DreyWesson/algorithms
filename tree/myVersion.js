class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (newNode.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            // console.log(this);
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            // console.log(this);
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    //Code here
    let currentNode = this.root;
    if (!currentNode) return null;
    if (currentNode.value === value) {
      console.log(currentNode);
      return currentNode;
    }

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          if (currentNode.left.value === value) {
            console.log(currentNode.left);
            return currentNode.left.value;
          } else currentNode = currentNode.left;
        } else return console.log("Not Found");
      } else {
        if (currentNode.right) {
          if (currentNode.right.value === value) {
            console.log(currentNode.right);
            return currentNode.right.value;
          } else currentNode = currentNode.right;
        } else return console.log("Not Found");
      }
    }
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(14);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.find(9);
// tree.lookup(1);
// tree.lookup(15);
// tree.lookup(0);
// JSON.stringify(traverse(tree.root));

//        9
//     4     20
//  1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  // console.log(tree);
  return tree;
}

// console.log(JSON.stringify(traverse(tree.root)));
