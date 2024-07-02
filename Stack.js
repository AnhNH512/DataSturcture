// LIFO : last in fisrt out
// Item nào vào sau cùng thì item đó được lấy ra đầu tiên
// Các loại Stack : Simple Array Implementation, Dynamic Array Implementation, Linked List Implementation
// Kể cả có bao nhiêu implementation đi nữa thì các implementation đều phải tuân thủ ADT (Abstract Data Type)
// Đối với những loại cấu trúc dữ liệu thì nó luôn luôn có thứ gọi là Abstract Data Type, có nghĩa là dù cho tạo implementation của stack bằng linked list hay array hay là gì đi nữa
// Nhưng mà nó luôn luôn phải có những function sau (đối với stack) : Push(), Pop(), Top(), Size(),isStackEmpty(), isFullstack()

const { ImpelemtationArray } = require("./Array");
const { LinkedList, Node } = require("./LinkedList");

// class StackArray extends ImpelemtationArray {
//   constructor() {
//     super();
//   }

//   Push(data) {
//     this.push(data);
//   }

//   Pop() {
//     if (this.IsEmpty()) {
//       return "Underflow";
//     }
//     const newArr = [];
//     const currentArray = this.array;
//     for (let i = 0; i < this.length - 1; i++) {
//       newArr.push(currentArray[i]);
//     }
//     console.log(newArr,'newArr');
//     this.array = newArr;
//     this.length = this.length- 1
//     return currentArray[this.length - 1];
//   }

//   Top() {
//     if (this.IsEmpty()) {
//       return "Underflow";
//     }
//     return this.array[this.length - 1];
//   }
// }

// const newStackArray = new StackArray();
// newStackArray.Push('test')
// newStackArray.Push('test1')
// newStackArray.PrintList()



class StackLinkedList extends LinkedList {
  constructor() {
    super();
  }
  // Thêm data vào cuối linked list.
  Push(data) {
    const newNode = new Node(data);
    console.log(newNode, "newNode");
    let current = this.head;
    while (current.next) {
      current = current.next
    }
    if(current){
      current.next = newNode
      this.tail = newNode
    }
  }

  Pop() {
    if (this.head) {
      let current = this.head;
      let prev 
      while (current.next) {
        prev = current
        current = current.next
      }
      console.log(prev,'prev',current,'current');
      if(prev && current){
        prev.next = null        
        return current;
      }
    } else {
      return console.log("Hiện tại trong linked list không có phần tử nào");
    }
  }

  Peek() {
    return this.tail;
  }

  printList() {
    let current = this.head;

    while (current) {
      console.log(current, "current");
      current = current.next;
    }
  }
}

const stackLinkedList = new StackLinkedList();
stackLinkedList.addAtHead("1");
stackLinkedList.addAtHead("2");
stackLinkedList.Push(3)
stackLinkedList.printList();
