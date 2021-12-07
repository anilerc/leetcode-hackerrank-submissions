/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

        ListNode head = new ListNode();
        ListNode headRef = head;

        int currentsum;
        int currentdigit = 0;
        int carry = 0;

        int digit1;
        int digit2;

        while(l1 != null || l2 != null){
            if(l1 == null){
                digit1 = 0;
            } else {
                digit1 = l1.val;
                l1=l1.next;
            }

            if(l2 == null){
                digit2 = 0;
            } else {
                digit2 = l2.val;
                l2 = l2.next;
            }
            currentsum = digit1 + digit2 + carry;
            currentdigit = currentsum % 10;
            carry = currentsum / 10;

            head.next = new ListNode(currentdigit);
            head = head.next;
        }

        if(carry != 0) {
            head.next = new ListNode(carry);
        }


        return headRef.next;







    }



}
