class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d


const insertNode = (head, value, index) => {
  let current = head;
  let count = 0;

  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  while (current !== null) {
    if (count === index - 1) {
      const previousCurrentNext = current.next;
      current.next = new Node(value);
      current.next.next = previousCurrentNext;
      return head;
    } 
    current = current.next;
    count += 1;
  }
};

const _insertNode = (head, value, index, count = 0) => {
  if (head === null) return null;
  
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  
  if (count === index - 1) {
    const previousCurrentNext = head.next;
    head.next = new Node(value);
    head.next.next = previousCurrentNext;
    return head;
  }
  insertNode(head.next, value, index, count + 1);
  return head;
};

console.log(insertNode(a, 'x', 2));