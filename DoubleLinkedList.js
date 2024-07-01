class Node {
    constructor(data){
        this.next = null 
        this.data = data
        this.prev = null
    }   
}

class DoubleLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    
    getHead(){
        return this.head
    }

    getTail(){
        return this.tail
    }

    IsEmpty(){
        return this.getSize() === 0
    }

    addHead(data){
        if(this.IsEmpty()){
            const newNode = new Node(data)
            this.tail = newNode
            this.head = newNode
        }else {
            const newNode = new Node(data)
            this.head.prev = newNode
            newNode.next = this.head;
            this.head = newNode
        }
        
    }

  

    addTail(data){
        const newNode = new Node(data)
        if(this.IsEmpty()){
            // console.log('handle here', this.tail)
            this.tail = newNode
            this.head = newNode
        }else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        // console.log('add Tail',newNode)
        // this.tail = newNode 
    }

    getSize(){
        let count = 0
        let current = this.head
        while(current){
            count++
            current = current.next
        }
        return count
    }

    removeHead(){
        let newNode = this.head.next
        newNode.prev = null
        this.head = newNode        
    }

    removeTail(){
        let newNode = this.tail.prev
        newNode.next = null
        this.tail = newNode        
    }

    removeAtIndex(index){
        console.log('index>>>',index)
        console.log(this.getSize(),'size')
        if(index === 0){
            this.removeHead()
            return;
        }else if(index === this.getSize() - 1){
            this.removeTail();
            return;
        }else if(index < 0){
            return console.log(`Index don't below zero`)
        }else {
            let currentIndex = 0
            let current = this.head
            let prev 
            while (current && currentIndex < index) {
                prev = current
                current = current.next 
                currentIndex++
            }

            if(prev && current){
                prev.next = current.next
                current.next.prev = prev
            }
        }
    }

    addAtIndex(index,data){
        const size = this.getSize() - 1
        console.log(index,size,'index - size')
        // Vì index đếm từ 0 còn size đếm từ 1 nên phải trừ 1 đi
        if(index < 0){
            console.log('Outside index');
            return;
        }else if(index === 0){
            console.log('handle At Head')
            this.addHead(data)
            // size + 1 là add vào vị trí cuối cùng của linked list
        }else if(index === size + 1) {
            this.addTail(data)
        }else {
            const rangeMiddle = size / 2
            
            console.log('handle At Index',rangeMiddle)
            // nếu như index lớn hơn một nửa size 
            if(index > rangeMiddle){
                let currentIndex = this.getSize()
                let current = this.tail
                let prev 
                // console.log(current,'current before asign')
                while (current && currentIndex > index) {
                    console.log('handle')
                    prev = current
                    current = current.prev
                    currentIndex--
                }
                // console.log('current>>>',current)
                // console.log('prev>>>>',prev);
                if(prev && current){
                    const newNode = new Node(data) 
                    current.next = newNode 
                    newNode.prev = current
                    newNode.next = prev
                    // current.prev = newNode
                    prev.prev = newNode          
                }
            }else {
                let currentIndex = 0
                let current = this.head
                let prev 
                // console.log(current,'current before asign')
                while (current && currentIndex < index) {
                    prev = current
                    current = current.next
                    currentIndex++
                }
                if(prev && current){
                    const newNode = new Node(data) 
                    current.prev = newNode 
                    newNode.next = current
                    newNode.prev = prev
                    current.prev = newNode
                    prev.next = newNode          
                }
            }
        }
    }

    printList(){
        let current = this.head
        console.log(this.head,'this.head')
        while(current){
            console.log(current,'current')
            current = current.next
        }
        
    }

}

const doubleLinkedList = new DoubleLinkedList()
doubleLinkedList.addHead('1')
doubleLinkedList.addHead('2')
doubleLinkedList.addHead('3')
// doubleLinkedList.addHead('3')
doubleLinkedList.addAtIndex(2,'testing')
// doubleLinkedList.removeAtIndex(2)
doubleLinkedList.printList()
// console.log(doubleLinkedList.getSize(),'size')
// console.log(doubleLinkedList.getTail(),'tail')
// const newNode = new Node(data, this.head); // Nút mới trỏ đến nút hiện tại
// this.head = newNode; // Nút mới trở thành nút đầu tiên