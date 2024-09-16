class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const linkedListFind = (head, target) => {
  while (head !== null) {
    if (head.val === target) {
      return true;
    }
    head = head.next;
  }
  return false;
};

const _linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
};


console.log(linkedListFind(a, "b")); 