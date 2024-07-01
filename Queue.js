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

  Access(index) {
    if (index < 0 || index > this.length) {
      return console.log("Index không phù hợp");
    }
    return this.queueArray[index];
  }

  Push(data) {
    const newArray = [...this.queueArray, data];
    this.queueArray = newArray;
    this.length = this.length + 1
  }

  Insert(index, data) {
    console.log(this.length,'this.length');
    if (index < 0 || index > this.length + 1) {
      return console.log("index out range");
    } else if (index === 0) {
      const current = [...this.queueArray];
      const newArray = [data, ...current];
      this.queueArray = newArray;
      this.length = this.length + 1
    } else if (index === this.length) {
        console.log('push',data);
      this.Push(data);
    } else {
        console.log('handle here',data);
        console.log(this.queueArray,'this.queueArray');
        const currentArray = this.queueArray
        const newArray = []
        for (let i = 0; i < currentArray.length; i++) {
            if(i === index){
                console.log(i,'i',index,'index',currentArray[i]);
                newArray[i + 1] = currentArray[i]
                newArray[i] = data
                i++
            }else {
                newArray[i] = currentArray[i]
            }
            
        }
        this.length = this.length + 1
        this.queueArray = newArray
        console.log(newArray,'newArray');
    }
  }

  Enqueue(data) {
    let currentArray = this.queueArray;
    if (this.length) {
      currentArray.splice(this.length - 1, 0, data);
      this.queueArray = currentArray;
      this.length = this.length + 1
    }
  }

  Dequeue() {
    let currentArray = this.queueArray;
    if (this.length) {
      currentArray.splice(0, 1);
      this.queueArray = currentArray;
    }
    this.length = this.length - 1
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
  PrintList(){
    let currentArray = this.queueArray
    for (let i = 0; i < currentArray.length; i++) {
        console.log('item>>>',currentArray[i]); 
    }
  }
}

const arrayQueue = new ArrayQueue();
arrayQueue.Insert(0,123)
arrayQueue.Insert(0,'llll')
arrayQueue.Insert(1,1231231223321)
arrayQueue.PrintList()

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
