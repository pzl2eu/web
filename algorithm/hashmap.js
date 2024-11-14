class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }

  toArray() {
    return [this.key, this.value];
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(key, value) {
    const newNode = new Node(key, value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  prepend(key, value) {
    const newNode = new Node(key, value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  find(para) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.key === para || currentNode.value === para) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
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
}

// buckets[hashcode] = bucket
// buckets: array
// bucket: linked list
class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.size = 0;
    this.buckets = new Array(capacity);
    for (let i = 0; i < capacity; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  // Rama & Sita
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    let currentNode = bucket.head;
    if (bucket.find(key)) {
      bucket.find(key).value = value;
      return;
    }
    bucket.append(key, value);
    this.size++;
    if (this.size > this.capacity * this.loadFactor) {
      this.resize();
    }
  }

  resize() {
    this.capacity *= 2;
    const oldBuckets = this.buckets;
    this.buckets = Array.from(
      { length: this.capacity },
      () => new LinkedList(),
    );
    this.size = 0;

    for (let i = 0; i < oldBuckets.length; i++) {
      let currentNode = oldBuckets[i].head;
      while (currentNode) {
        let newIndex = this.hash(currentNode.key);
        this.buckets[newIndex].append(currentNode.key, currentNode.value);
        this.size++;
        currentNode = currentNode.nextNode;
      }
    }
  }
  getValue(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const node = bucket.find(key);
    return node ? node.value : null;
  }
  entries() {
    const entriesArray = [];

    for (let i = 0; i < this.buckets.length; i++) {
      let currentNode = this.buckets[i].head;
      while (currentNode) {
        entriesArray.push([currentNode.key, currentNode.value]);
        currentNode = currentNode.nextNode;
      }
    }
    return entriesArray;
  }
}

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");

console.log(test.getValue("kite"));
console.log(test.entries());
console.log(test.size);
console.log(test.capacity);
