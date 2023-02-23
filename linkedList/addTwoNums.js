/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor(val) {
        this.head = new Node(val);
        this.tail = this.head;
        this.length = 1;
    }
    prepend(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    printList(head) {
        let node = head;
        while (node) {
            console.log("NODE ---->", node);
            console.log("Val ---->", node.val);
            node = node.next;
        }
    }
}
var addTwoNumbers = function (l1, l2) {
    let str1 = "";
    let str2 = "";
    let tmp1 = l1;
    let tmp2 = l2;
    while (tmp1 || tmp2) {
        if (tmp1) {
            str1 = tmp1.val + str1;
            tmp1 = tmp1.next;
        }
        if (tmp2) {
            str2 = tmp2.val + str2;
            tmp2 = tmp2.next;
        }
    }
    let tmp = 0;
    tmp1 = 0;
    let newVal = "";
    while (str1[tmp1] || str2[tmp1]) {
        let num1 = +str1[tmp1] || 0;
        let num2 = +str2[tmp1] || 0;
        let sum = num1 + num2 + tmp;
        let stringify = "" + sum;
        if (sum > 9) {
            // sum +=
            newVal += stringify[1];
            tmp = +stringify[0];
        } else {
            newVal += sum;
            tmp = 0;
        }
        tmp1++;
    }
    if (tmp) newVal += tmp;

    const newNodes = new LinkedList(newVal[newVal.length - 1]);

    let i = newVal.length - 2;
    while (i >= 0 && newVal[i]) {
        newNodes.prepend(+newVal[i]);
        i--;
    }
    // newNodes.printList(newNodes.head);

    return newNodes.head;
};
