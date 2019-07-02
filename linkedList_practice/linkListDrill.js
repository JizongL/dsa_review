const LinkedList = require('./LinkedList')



const SLL = new LinkedList;

function main(){
    SLL.insertFirst('test');
    SLL.insertLast('test2');
    SLL.insertLast('test3')
    console.log(SLL);
}

main()