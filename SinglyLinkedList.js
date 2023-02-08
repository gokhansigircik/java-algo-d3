//////////////! WEDNESDAY //////////////////////
/* Creates a new node with the given data and inserts that node at the front
 * of this list.
 * - Time: (?).
 * - Space: (?).
 * @param {any} data The data for the new node.
 * @returns {SinglyLinkedList} This list.
 */
insertAtFront(data) {
  const newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
  return this;
}

/**
 * Removes the first node of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {any} The data from the removed node.
 */
removeHead() {
  if(this.isEmpty()){
    return null;
  }

  let temp = this.head;
  this.head = this.head.next;
  temp.next = null;
  return temp.data;
}

// EXTRA
/**
 * Calculates the average of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {number|NaN} The average of the node's data.
 */
average() {
  let sum = 0;
  let counter = 0;
  let average = 0;
  let runner = this.head;

  while (runner){
    sum += runner.data;
    counter ++;
    runner = runner.next;
  }
  average = sum / counter;
  return average;

}

  /******************************************************************* 
  Multiple test lists already constructed to test your methods on.
  Below commented code depends on insertAtBack method to be completed,
  after completing it, uncomment the code.
  */
  const emptyList = new SinglyLinkedList();
  const SLL = new SinglyLinkedList();
  const emptyList = new SinglyLinkedList();
  const SLL = new SinglyLinkedList();
  SLL.insertAtFront(5)
  console.log(SLL.toArr());
  SLL.insertAtBack(9);
  SLL.insertAtFront(4);
  console.log(SLL.toArr());
  SLL.removeHead();
  console.log(SLL.toArr());
  console.log(SLL.average());
  
  // const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
  // const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
  // const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
  // const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
  // const unorderedList = new SinglyLinkedList().insertAtBackMany([
  //   -5, -10, 4, -3, 6, 1, -7, -2,
  // ]);
  
  /* node 4 connects to node 1, back to head */
  // const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
  // perfectLoopList.head.next.next.next = perfectLoopList.head;
  
  /* node 4 connects to node 2 */
  // const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
  // loopList.head.next.next.next = loopList.head.next;
  
  // const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
  //   1, 1, 1, 2, 3, 3, 4, 5, 5,
  // ]);
  
  // Print your list like so:
  // console.log(firstThreeList.toArr());




// ***********Bo's Solution*****************

    /* Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
//     insertAtFront(data) {
//       const newNode = new Node(data);
//       // checks if current list is empty
//       // if not, add new Node to the front
//       if (this.head) {
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//       } 

//       // if current list is empty, set the head as new Node
//       this.head = newNode;
//       return this.head;
//     }

//     /**
//      * Removes the first node of this list.
//      * - Time: (?).
//      * - Space: (?).
//      * @returns {any} The data from the removed node.
//      */
//     removeHead() {
//       if (this.head) {
//         this.head = this.head.next;
//       }
//       return this.head;
//     }

//     // EXTRA
//     /**
//      * Calculates the average of this list.
//      * - Time: (?).
//      * - Space: (?).
//      * @returns {number|NaN} The average of the node's data.
//      */
//     average() {
//       let sum = 0, count = 0;
//       // check if current list is empty
//       if (this.head) {
//         let currNode = this.head;
//         while (currNode) {
//           // check if the data type if number
//           if (isNaN(currNode.data)) return NaN;
//           sum += currNode.data;
//           count++;
//           currNode = currNode.next;
//         }
//         return sum/count;
//       }
//       return NaN;
//     }
// }



// Chris/s solution For inserting at front and removing the head

// insertAtFront(data) {
//   const newHead = new ListNode(data);
//   newHead.next = this.head;
//   this.head = newHead;
//   return this;
// }

// removeHead() {
//   if (!this.isEmpty()) this.head = this.head.next;
//   return this;
// }