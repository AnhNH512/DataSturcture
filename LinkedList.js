class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.render();
  }

  move(fromIndex, toIndex) {
    if (fromIndex === toIndex) return;

    let current = this.head;
    let fromNode = null;
    let toNode = null;
    let index = 0;

    while (current) {
      if (index === fromIndex) fromNode = current;
      if (index === toIndex) toNode = current;
      current = current.next;
      index++;
    }

    if (!fromNode || !toNode) return;

    // Xóa nút từ vị trí hiện tại
    if (fromNode.prev) fromNode.prev.next = fromNode.next;
    if (fromNode.next) fromNode.next.prev = fromNode.prev;

    // Chèn nút vào vị trí mới
    if (toNode.prev) toNode.prev.next = fromNode;
    if (fromNode.prev) fromNode.prev.next = fromNode;
    if (toNode) fromNode.prev = toNode.prev;
    fromNode.next = toNode;
    toNode.prev = fromNode;

    // Cập nhật head nếu cần
    if (fromIndex === 0) this.head = fromNode;

    this.render();
  }

  render() {
    const container = document.getElementById("task-list");
    container.innerHTML = "";

    let current = this.head;
    while (current) {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.textContent = current.data;
      taskElement.draggable = true;

      taskElement.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", current.data);
      });

      taskElement.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      taskElement.addEventListener("drop", (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        const tasks = Array.from(container.children);
        const fromIndex = tasks.findIndex((task) => task.textContent === data);
        const toIndex = tasks.findIndex((task) => task === taskElement);
        this.move(fromIndex, toIndex);
      });

      container.appendChild(taskElement);
      current = current.next; // Di chuyển con trỏ tới nút tiếp theo
    }
    // const container = document.getElementById("task-list");
    // container.innerHTML = "";

    // let current = this.head;
    // while (current) {
    //   const taskElement = document.createElement("div");
    //   taskElement.classList.add("task");
    //   taskElement.textContent = current.data;
    //   taskElement.draggable = true;

    //   taskElement.addEventListener("dragstart", (e) => {
    //     e.dataTransfer.setData("text/plain", current.data);
    //   });

    //   taskElement.addEventListener("dragover", (e) => {
    //     e.preventDefault();
    //   });

    //   taskElement.addEventListener("drop", (e) => {
    //     e.preventDefault();
    //     const data = e.dataTransfer.getData("text/plain");
    //     const tasks = Array.from(container.children);
    //     const fromIndex = tasks.findIndex((task) => task.textContent === data);
    //     const toIndex = tasks.findIndex((task) => task === taskElement);
    //     this.move(fromIndex, toIndex);
    //   });

    //   container.appendChild(taskElement);
    //   current = current.next;
    // }
  }
}

const tasks = new DoubleLinkedList();
tasks.append("Task 1");
tasks.append("Task 2");
tasks.append("Task 3");
tasks.append("Task 4");
// tasks.move(3, 1);
