// LIFO : last in fisrt out
// Item nào vào sau cùng thì item đó được lấy ra đầu tiên
// Các loại Stack : Simple Array Implementation, Dynamic Array Implementation, Linked List Implementation
// Kể cả có bao nhiêu implementation đi nữa thì các implementation đều phải tuân thủ ADT (Abstract Data Type)
// Đối với những loại cấu trúc dữ liệu thì nó luôn luôn có thứ gọi là Abstract Data Type, có nghĩa là dù cho tạo implementation của stack bằng linked list hay array hay là gì đi nữa
// Nhưng mà nó luôn luôn phải có những function sau (đối với stack) : Push(), Pop(), Top(), Size(),isStackEmpty(), isFullstack()

const { ImpelemtationArray } = require("./Array");
const { LinkedList, Node } = require("./LinkedList");

class StackArray extends ImpelemtationArray {
  constructor() {
    super();
  }

  Push(data) {
    this.push(data);
  }

  Pop() {
    if (this.IsEmpty()) {
      return "Underflow";
    }
    const newArr = [];
    const currentArray = this.array;
    for (let i = 0; i < currentArray.length - 2; i++) {
      newArr.push(currentArray[i]);
    }
    this.array = newArr;
    return currentArray[this.length - 1];
  }

  Top() {
    if (this.IsEmpty()) {
      return "Underflow";
    }
    return this.array[this.length];
  }
}

const newStackArray = new StackArray();
