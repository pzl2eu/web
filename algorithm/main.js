import { LinkedList } from "./linkedlist.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
console.log(list.toString());
list.insertAt("rabbit", 2);
console.log(list.toString());

console.log(list.contains("cat"));
console.log(list.find("cat"));
list.pop();
console.log(list.toString());
console.log(list.at(2));
list.removeAt(1);
console.log(list.toString());
