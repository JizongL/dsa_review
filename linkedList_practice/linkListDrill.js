const LinkedList = require('./LinkedList')





function reverseList(list) {
    let current = list.head;
    let previous = null;
  
    while(current !== null) {
      let currentNext = current.next;
      console.log(currentNext,'test currentNext------')
      current.next = previous;
      console.log(current.next,'test current.next------')
      previous = current;
      console.log(previous,'test previous------')
      current = currentNext;
      console.log(current,'test current------')
    }
    
    list.head = previous;
    
    return list;
  
  }

const SLL = new LinkedList;

function main(){
    SLL.insertFirst('test');
    SLL.insertLast('test2');
    SLL.insertLast('test3');
    SLL.insertLast('test4')
   
    console.log(reverseList(SLL))

}

main()

const list1 = new LinkedList;
const list2 = new LinkedList;

list1.insertFirst('B')
list1.insertFirst('i')
list1.insertFirst('l')
list1.insertFirst('b')
list1.insertFirst('o')
list1.insertFirst('a')

list2.insertFirst('B')
list2.insertFirst('i')
list2.insertFirst('l')
list2.insertFirst('b')
list2.insertFirst('o')

console.log(list1.head,'test list1 head')

function compareList(list1,list2){

}