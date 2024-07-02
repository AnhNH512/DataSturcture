// Implementation array

class ImpelemtationArray {
  constructor(maxLength) {
    this.array = [];
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
    return this.array[index];
  }

  push(data) {
    const newArray = [...this.array, data];
    this.array = newArray;
    this.length = this.length + 1;
  }

  ThrowMessage(message) {
    if (message === "outsize") {
      return console.log("index out range");
    }
  }

  Insert(index, data) {
    if (index < 0 || index > this.length + 1) {
      return ThrowMessage("outsize");
    } else if (index === 0) {
      const current = [...this.array];
      const newArray = [data, ...current];
      this.array = newArray;
      this.length = this.length + 1;
    } else if (index === this.length) {
      this.push(data);
    } else {
      const currentArray = this.array;
      const newArray = [];
      for (let i = 0; i < currentArray.length; i++) {
        if (i === index) {
          newArray[i + 1] = currentArray[i];
          newArray[i] = data;
          i++;
        } else {
          newArray[i] = currentArray[i];
        }
      }
      this.length = this.length + 1;
      this.array = newArray;
    }
  }

  Update(index, data) {
    if (index < 0 || index > this.length + 1) {
      return ThrowMessage("outsize");
    }
    const currentArray = this.array;
    currentArray[index] = data;
    this.array = currentArray;
  }

  Delete(index) {
    console.log("delete");
    if (index < 0 || index > this.length + 1) {
      return ThrowMessage("outsize");
    }
    const currentArray = this.array;
    const newArray = [];

    for (let i = 0; i < currentArray.length; i++) {
      if (i !== index) {
        newArray.push(currentArray[i]);
      }
    }

    this.array = newArray;
  }

  IndexOf(value) {
    const currentArray = this.array;
    for (let i = 0; i < currentArray.length; i++) {
      if (currentArray[i] === value) {
        return i;
      }
    }
    return -1;
  }

  Sort(a, b) {}

  IsEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.length === this.maxLength;
  }

  PrintList() {
    let currentArray = this.array;
    for (let i = 0; i < currentArray.length; i++) {
      console.log("item>>>", currentArray[i]);
    }
  }
}

const array = new ImpelemtationArray();
array.push(123);
array.push("llll");
// array.Insert(1, 1231231223321);
array.Update(1, "update 1");
array.PrintList();
console.log(ImpelemtationArray, "array");
module.exports = {
  ImpelemtationArray,
};
