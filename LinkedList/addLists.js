class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a1 = new Node(1);
const a2 = new Node(4);
const a3 = new Node(5);
const a4 = new Node(7);
a1.next = a2;
a2.next = a3;
a3.next = a4;

const b1 = new Node(2);
const b2 = new Node(3);
b1.next = b2;

const addLists = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;
  let result = new Node(null);
  let tail = result;
  let carry = 0;

  while (current1.val !== 0 || current2.val !== 0 || carry !== 0) {
    const sum = current1.val + current2.val + carry;
    const digit = sum % 10;
    tail.next = new Node(digit);
    carry = sum > 9 ? 1 : 0;
    
    tail = tail.next;
    current1.next !== null ? current1 = current1.next : current1.val = 0;
    current2.next !== null ? current2 = current2.next : current2.val = 0;
  }

  return result.next;
};

const _addLists = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null;
  const val1 = head1 === null ? 0 : head1.val;
  const val2 = head2 === null ? 0 : head2.val;

  const sum = val1 + val2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;
  
  const resultNode = new Node(digit);

  const nextHead1 = head1 === null ? null : head1.next;
  const nextHead2 = head2 === null ? null : head2.next

  resultNode.next = addLists(nextHead1, nextHead2, nextCarry);

  return resultNode;
};

console.log(addLists(a1, b1));