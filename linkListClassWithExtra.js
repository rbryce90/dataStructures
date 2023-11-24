function createNode(value) {
  return {
    value,
    next: null,
  };
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert = (value) => {
    this.length++;
    let newNode = createNode(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }
    this.head = this.tail = newNode;
    return newNode;
  };
  print = () => {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  };
  remove = () => {
    if (!this.tail) return;
    this.length--;
    const tailNode = this.tail;
    let currentNode = this.head;

    while (currentNode.next != tailNode) {
      currentNode = currentNode.next;
    }
    const beforeTail = currentNode;
    this.tail = beforeTail;
    this.tail.next = null;
    return tailNode;
  };

  insertHead = (value) => {
    let newNode = createNode(value);
    this.length++;
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  };

  removeHead = () => {
    if (!this.head) return;
    this.length--;
    const removedNode = this.head;
    this.head = this.head.next;
    return removedNode;
  };
}

let myLinkList = new LinkList();

myLinkList.insert("Data");
myLinkList.insert("Bryce");
myLinkList.insert("Sofia");
myLinkList.print();
console.log("=============");
myLinkList.insertHead("this should be the first thing now");
myLinkList.print();
console.log("=============");
myLinkList.print();
myLinkList.removeHead();
console.log("===================");
myLinkList.print();
console.log("whole structure: ", JSON.stringify(myLinkList));
