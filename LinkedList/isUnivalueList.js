class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(7);
const b = new Node(5);
const c = new Node(7);

a.next = b;
b.next = c;

const isUnivalueList = (head) => {
  let current = head;

  while (current !== null) {
    if (current.val !== head.val) return false;
    current = current.next;
  }
  return true;
};

const _isUnivalueList = (head, current = head) => {
  if (current === null) return true;
  if (current.val !== head.val) return false;
  return isUnivalueList(head, current.next);
};

const __isUnivalueList = (head, prevVal = null) => {
  if (head === null) return true;
  if (prevVal !== null && head.val !== prevVal) return false;
  return isUnivalueList(head.next, head.val);
};


console.log(isUnivalueList(a));