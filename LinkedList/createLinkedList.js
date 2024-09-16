class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const createLinkedList = (values) => {
//   if (values.length === 0) return null;

//   const head = new Node(values[0]);
//   let current = head;

//   for (i = 1; i < values.length; i++) {
//     current.next = new Node(values[i]);
//     current = current.next;
//   }

//   return head;
// };

const createLinkedList = (values) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;

  for (let value of values) {
    tail.next = new Node(value);
    tail = tail.next;
  }

  return dummyHead.next;
};

// const _createLinkedList = (values) => {
//   if (values.length === 0) return null;
//   const head = new Node(values[0]);
//   head.next = createLinkedList(values.slice(1));
//   return head;
// };

const __createLinkedList = (values, index = 0) => {
  if (index === values.length) return null;
  const head = new Node(values[index]);
  head.next = __createLinkedList(values, index + 1);
  return head;
};



console.log(createLinkedList(["h", "e", "y"]));