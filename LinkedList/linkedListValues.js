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

const linkedListValues = (head) => {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
};

const _linkedListValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  _linkedListValues(head.next, values);
};


console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]