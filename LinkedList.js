// class Node {
//   constructor(data) {
//     this.data = data;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class DoubleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.prev = this.tail;
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.render();
//   }

//   move(fromIndex, toIndex) {
//     if (fromIndex === toIndex) return;

//     let current = this.head;
//     let fromNode = null;
//     let toNode = null;
//     let index = 0;

//     while (current) {
//       if (index === fromIndex) fromNode = current;
//       if (index === toIndex) toNode = current;
//       current = current.next;
//       index++;
//     }

//     if (!fromNode || !toNode) return;

//     // Xóa nút từ vị trí hiện tại
//     if (fromNode.prev) fromNode.prev.next = fromNode.next;
//     if (fromNode.next) fromNode.next.prev = fromNode.prev;

//     // Chèn nút vào vị trí mới
//     if (toNode.prev) toNode.prev.next = fromNode;
//     if (fromNode.prev) fromNode.prev.next = fromNode;
//     if (toNode) fromNode.prev = toNode.prev;
//     fromNode.next = toNode;
//     toNode.prev = fromNode;

//     // Cập nhật head nếu cần
//     if (fromIndex === 0) this.head = fromNode;

//     this.render();
//   }

//   render() {
//     const container = document.getElementById("task-list");
//     container.innerHTML = "";

//     let current = this.head;
//     while (current) {
//       const taskElement = document.createElement("div");
//       taskElement.classList.add("task");
//       taskElement.textContent = current.data;
//       taskElement.draggable = true;

//       taskElement.addEventListener("dragstart", (e) => {
//         e.dataTransfer.setData("text/plain", current.data);
//       });

//       taskElement.addEventListener("dragover", (e) => {
//         e.preventDefault();
//       });

//       taskElement.addEventListener("drop", (e) => {
//         e.preventDefault();
//         const data = e.dataTransfer.getData("text/plain");
//         const tasks = Array.from(container.children);
//         const fromIndex = tasks.findIndex((task) => task.textContent === data);
//         const toIndex = tasks.findIndex((task) => task === taskElement);
//         this.move(fromIndex, toIndex);
//       });

//       container.appendChild(taskElement);
//       current = current.next; // Di chuyển con trỏ tới nút tiếp theo
//     }
//     // const container = document.getElementById("task-list");
//     // container.innerHTML = "";

//     // let current = this.head;
//     // while (current) {
//     //   const taskElement = document.createElement("div");
//     //   taskElement.classList.add("task");
//     //   taskElement.textContent = current.data;
//     //   taskElement.draggable = true;

//     //   taskElement.addEventListener("dragstart", (e) => {
//     //     e.dataTransfer.setData("text/plain", current.data);
//     //   });

//     //   taskElement.addEventListener("dragover", (e) => {
//     //     e.preventDefault();
//     //   });

//     //   taskElement.addEventListener("drop", (e) => {
//     //     e.preventDefault();
//     //     const data = e.dataTransfer.getData("text/plain");
//     //     const tasks = Array.from(container.children);
//     //     const fromIndex = tasks.findIndex((task) => task.textContent === data);
//     //     const toIndex = tasks.findIndex((task) => task === taskElement);
//     //     this.move(fromIndex, toIndex);
//     //   });

//     //   container.appendChild(taskElement);
//     //   current = current.next;
//     // }
//   }
// }

// const tasks = new DoubleLinkedList();
// tasks.append("Task 1");
// tasks.append("Task 2");
// tasks.append("Task 3");
// tasks.append("Task 4");
// // tasks.move(3, 1);

class Node {
  constructor(data, next = null) {
    this.data = data; // Dữ liệu của nút
    this.next = next; // Con trỏ trỏ đến nút tiếp theo, mặc định là null
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Đầu của danh sách liên kết, ban đầu là null
  }

  // Thêm phần tử vào cuối danh sách
  add(data) {
    const newNode = new Node(data); // Tạo một nút mới
    if (!this.head) {
      this.head = newNode; // Nếu danh sách rỗng, nút mới là nút đầu tiên
      return;
    }
    let current = this.head; // Bắt đầu từ đầu danh sách
    while (current.next) {
      // Duyệt đến nút cuối cùng
      current = current.next;
    }
    current.next = newNode; // Thêm nút mới vào cuối danh sách
  }

  // Thêm phần tử vào đầu danh sách
  addAtHead(data) {
    const newNode = new Node(data, this.head); // Nút mới trỏ đến nút hiện tại
    this.head = newNode; // Nút mới trở thành nút đầu tiên
  }

  // Thêm phần tử tại vị trí cụ thể
  addAtIndex(index, data) {
    if (index < 0) return;
    if (index === 0) {
      this.addAtHead(data); // Thêm vào đầu danh sách nếu index là 0
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index && current) {
      // Duyệt đến vị trí cần thêm
      previous = current;
      current = current.next;
      count++;
    }
    if (previous) {
      newNode.next = current; // Nút mới trỏ đến nút hiện tại
      previous.next = newNode; // Nút trước đó trỏ đến nút mới
    }
  }

  // Sửa phần tử tại vị trí cụ thể
  updateAtIndex(index, data) {
    if (index < 0) return;
    let current = this.head;
    let count = 0;
    while (count < index && current) {
      // Duyệt đến vị trí cần sửa
      current = current.next;
      count++;
    }
    if (current) {
      current.data = data; // Cập nhật dữ liệu của nút tại vị trí đó
    }
  }

  // Xóa phần tử tại vị trí cụ thể
  removeAtIndex(index) {
    if (index < 0) return;
    if (index === 0 && this.head) {
      this.head = this.head.next; // Xóa nút đầu tiên
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index && current) {
      // Duyệt đến vị trí cần xóa
      previous = current;
      current = current.next;
      count++;
    }
    if (previous && current) {
      previous.next = current.next; // Bỏ qua nút hiện tại
    }
  }

  // Hiển thị danh sách liên kết
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data); // In dữ liệu của từng nút
      current = current.next; // Chuyển đến nút tiếp theo
    }
  }
}

const linkedList = new LinkedList();

// Thêm phần tử
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
console.log("Danh sách sau khi thêm phần tử:");
linkedList.printList();

// Thêm phần tử vào đầu danh sách
linkedList.addAtHead(5);
console.log("\nDanh sách sau khi thêm phần tử vào đầu:");
linkedList.printList();

// Thêm phần tử tại vị trí cụ thể
linkedList.addAtIndex(2, 15);
console.log("\nDanh sách sau khi thêm phần tử tại vị trí 2:");
linkedList.printList();

// Sửa phần tử tại vị trí cụ thể
linkedList.updateAtIndex(3, 25);
console.log("\nDanh sách sau khi sửa phần tử tại vị trí 3:");
linkedList.printList();

// Xóa phần tử tại vị trí cụ thể
linkedList.removeAtIndex(1);
console.log("\nDanh sách sau khi xóa phần tử tại vị trí 1:");
linkedList.printList();
