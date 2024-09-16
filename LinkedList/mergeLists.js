class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(1);
const r = new Node(8);
const s = new Node(9);
const t = new Node(10);
q.next = r;
r.next = s;
s.next = t;

const __mergeLists = (head1, head2) => {
  debugger
  let current1 = head1;
  let current2 = head2;
  let tail;

  if (current1.val <= current2.val) {
    tail = current1;
    current1 = current1.next;
  } else {
    tail = current2;
    current2 = current2.next;
  }
  
  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1 === null) tail.next = current2;
  if (current2 === null) tail.next = current1;

  return head1.val > head2.val ? head2 : head1;
};

const _mergeLists = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;
  const dummyHead = new Node(null);
  let tail = dummyHead;
  
  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1 === null) tail.next = current2;
  if (current2 === null) tail.next = current1;

  return dummyHead.next;
}

const mergeLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  if (head1.val < head2.val) {
    const next1 = head1.next;
    head1.next = mergeLists(next1, head2)
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeLists(next2, head1)
    return head2;
  }
}

console.log(mergeLists(a, q));

