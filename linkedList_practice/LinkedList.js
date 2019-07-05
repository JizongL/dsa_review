class _Node{
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(item){
        this.head = new _Node(item,this.head);
    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
        }
        else{
            let tempNode = this.head;
            while(tempNode.next != null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item,null)
        }
    }


    insertBefore(item,key){
        let currNode = this.head;
        let previousNode = this.head;
        while((currNode!==null)&&(currNode.value!==key)){
            previousNode = currNode;
            currNode = currNode.next;            
        }
        if(currNode===null){
            return 'key item not found'
        }
        let InsertNode = new _Node(item,currNode);
        previousNode.next = InsertNode;        
    }

    insertAfter(item,key){
        let currNode = this.head;
        let nextNode = this.head;
        while((currNode!==null)&&(currNode.value!==key)){
            currNode = currNode.next;
            nextNode = currNode.next;
        }
        if(currNode===null){
            return 'key item not found'
        }
        let InsertNode = new _Node(item,nextNode)
        currNode.next = InsertNode
    }

    reverseLinkedList(){
        let currNode = this.head;
        let prevNode = this.head;
        while(currNode!==null){
            prevNode = currNode;
            currNode = currNode.next;
        }
        currNode.next = prevNode
    }

    insertBefore(item,key){
        let currNode = this.head;
        let prevNode = this.head;
        while((currNode!==null)&&(currNode.value!==key)){
            prevNode = currNode;
            currNode = currNode.next;
            
        }
        if(currNode===null){
            return 'key item not found'
        }
        let InsertNode = new _Node(item,currNode);
            prevNode.next = InsertNode;
    }

    insertAt(item,position){
        let currNode = this.head;
        let prevNode = this.head;
        let counter = 1;
        if(currNode === null){
            newNode = new _Node(item,currNode);
            currNode = currNode.next;
            return currNode;
        }
        while((currNode!==null)&&(counter<position)){
            counter ++;
            prevNode = currNode;
            currNode = currNode.next;
        }        
        if(currNode === null){
            console.log('list length is shorter than position to be inserted')
            return 
        }
        newNode = new _Node(item,currNode);
        prevNode.next = currNode;
    }

    size(){
        let counter = 0;
        let currNode = this.head;
        if(currNode==null){
            return 'list has a size of 0'
        }
        while(currNode!==null){
            counter ++;
            currNode = currNode.next;
        }
        return `List has length of ${counter}`
    }
    isEmpty(){
        return this.head===null;
    }
    find(item){
        let currNode = this.head;        
        if(!this.head){
            return null;
        }
        while(currNode.value!==item){
           if(currNode.next == null){
               return null;
           }
           else{
               currNode = currNode.next;
           }           

        }
        return currNode;
    }

    remove(item){
        if(!this.head){
            return null;
        }
        if(this.head.value == item){
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while((currNode !== null)&&(currNode.value!==item)){
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

module.exports = LinkedList;