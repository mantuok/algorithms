class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(9);
const b = new Node(1);
const c = new Node(2);
const d = new Node(5);
const e = new Node(6);
const f = new Node(8);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const longestStreak = (head) => {
  let current = head;
  let prev = current;
  let maxCount = 0;
  let count = 0;

  while (current !== null) {
    if (current.val === prev.val) {
      count += 1;
    } else {
      count = 1;
      prev = current;
    }
    if (maxCount < count) maxCount += 1;
    current = current.next;
  }
  return maxCount;
};


console.log(longestStreak(a));