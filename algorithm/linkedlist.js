export class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  getSize() {
    return this.size;
  }

  headNode() {
    return this.head;
  }
  tailNode() {
    return this.tail;
  }
  at(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== this.tail) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = null;
      this.tail = currentNode;
    }
    this.size--;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }
  toString() {
    let result = "";
    let currentNode = this.head;
    while (currentNode !== null) {
      result += `(${currentNode.value})=>`;
      currentNode = currentNode.nextNode;
    }
    result += "null";
    return result;
  }
  insertAt(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
      this.size++;
    }
  }
  removeAt(index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.head = this.head.nextNode;
      if (this.size === 1) {
        this.tail = null;
      }
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.newNode;
      }
      currentNode.nextNode = currentNode.nextNode.nextNode;
      if (index === this.size - 1) {
        this.tail = currentNode;
      }
    }
    this.size--;
  }
}
