class Node{
    constructor(value){
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                    
                }
                else{
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
    }

    }

    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }

            else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;

    }
    
        breadthFirstSearch(){
        let currentNode = this.root;
        let list = [];
        let queue = [];

        queue.push(currentNode);
         while (queue.length > 0) {
             currentNode = queue.shift();
             list.push(currentNode);

             if (currentNode.left) {
                 queue.push(currentNode.value);
             }
              if (currentNode.right) {
                  queue.push(currentNode.value)
              }
         }
         return list;
    }
}
