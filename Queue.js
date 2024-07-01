// Implementation array

class ArrayQueue {
  constructor(maxLength) {
    this.queueArray = [];
    this.length = 0;
    this.maxLength = maxLength;
  }

  getLength() {
    return this.length;
  }

  access(index) {
    if (index < 0 || index > this.length) {
      return console.log("Index không phù hợp");
    }
    return this.queueArray[index];
  }

  push(data) {
    const newArray = [...this.queueArray, data];
    this.queueArray = newArray;
  }

  Insert(index, data) {
    if (index < 0 || index > this.length) {
      return console.log("index out range");
    } else if (index === 0) {
      const current = [...this.queueArray];
      const newArray = [data, ...current];
      this.queueArray = newArray;
    } else if (index === this.length - 1) {
      this.push(data);
    } else {
    }
  }

  Enqueue(data) {
    let currentArray = this.queueArray;
    if (this.length) {
      currentArray.splice(this.length - 1, 0, data);
      this.queueArray = currentArray;
    }
  }

  Dequeue() {
    let currentArray = this.queueArray;
    if (this.length) {
      currentArray.splice(0, 1);
      this.queueArray = currentArray;
    }
  }

  IsEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.length === this.maxLength;
  }

  Peek() {
    if (this.queueArray) {
      return this.queueArray[0];
    } else {
      return;
    }
  }
}

const arrayQueue = new ArrayQueue();

// Implementation Linked List

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class QueueLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   // Thêm phần tử vào đầu linked list
//   addHead(data) {
//     const newNode = new Node(data);
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//   }
//   getSize() {
//     let current = this.head;
//     let count;
//     while (current) {
//       current = current.next;
//       count++;
//     }
//     return count;
//   }
//   // Thêm data vào cuối linked list.
//   Enqueue(data) {
//     const newNode = new Node(data);
//     if (this.tail === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
//   Dequeue() {
//     if (this.head) {
//       let current = this.head;
//       this.head = current.next;
//       return current;
//     } else {
//       return console.log("Hiện tại trong linked list không có phần tử nào");
//     }
//   }
//   IsEmpty() {
//     return this.getSize() === 0;
//   }
//   Peek() {
//     return this.head;
//   }

//   printList() {
//     let current = this.head;

//     while (current) {
//       console.log(current, "current");
//       current = current.next;
//     }
//   }
// }

// const queueLinkedList = new QueueLinkedList();
// queueLinkedList.addHead("1");
// queueLinkedList.addHead("2");
// queueLinkedList.Enqueue("3");
// console.log(queueLinkedList.Peek(), "First Item");
// queueLinkedList.printList();
