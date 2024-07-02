// Implementation array
// import { Array } from "./Array";
const { ImpelemtationArray } = require("./Array");
const { LinkedList, Node } = require("./LinkedList");

class ArrayQueue extends ImpelemtationArray {
  constructor(maxLength) {
    super(maxLength);
  }

  //Thêm phần tử vào cuối mảng.

  enqueue(data) {
    if (this.length) {
      this.push(data);
      this.length = this.length + 1;
    }
  }

  //Loại bỏ phần tử đầu tiên khỏi mảng.

  dequeue() {
    let currentArray = this.array;
    let newArray = [];
    if (this.length) {
      for (let i = 1; i < this.length; i++) {
        newArray.push(currentArray[i]);
      }
      this.array = newArray;
    }
    this.length = this.length - 1;
  }

  //Trả về phần tử đầu tiên mà không loại bỏ nó.

  peek() {
    if (this.array) {
      return this.array[0];
    } else {
      return;
    }
  }

  // In ra danh sách các phần tử trong mảng.

  PrintList() {
    let currentArray = this.array;
    console.log(currentArray, "currentArray");
    // for (let i = 0; i < currentArray.length; i++) {
    //   console.log("item>>>", currentArray[i]);
    // }
  }
}

const arrayQueue = new ArrayQueue();
arrayQueue.Insert(0, 123);
arrayQueue.dequeue();
arrayQueue.PrintList();

// Implementation Linked List

class QueueLinkedList extends LinkedList {
  constructor() {
    super();
  }
  // Thêm data vào cuối linked list.
  Enqueue(data) {
    const newNode = new Node(data);
    console.log(newNode, "newNode");
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  Dequeue() {
    if (this.head) {
      let current = this.head;
      this.head = current.next;
      return current;
    } else {
      return console.log("Hiện tại trong linked list không có phần tử nào");
    }
  }

  Peek() {
    return this.head;
  }

  printList() {
    let current = this.head;

    while (current) {
      console.log(current, "current");
      current = current.next;
    }
  }
}

const queueLinkedList = new QueueLinkedList();
// console.log(queueLinkedList, "queueLinkedList");
queueLinkedList.addAtHead("1");
queueLinkedList.addAtHead("2");
queueLinkedList.Enqueue("3");
// console.log(queueLinkedList.Peek(), "First Item");
queueLinkedList.printList();
