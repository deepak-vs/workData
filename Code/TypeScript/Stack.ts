class Stack<T>{
    private data:T[]=[];
    // private size:number;

    constructor(
        private size:number,
        ){
        // this.size=size;
        // this.data=[];
    }
    public isEmpty():boolean{
        return this.data.length===0;
    }
    public isFull():boolean{
        return this.data.length===this.size;
    }
    public push(element:T):void|never{
        if(this.isFull()){
            throw new Error("Stack is Full");
        }
        this.data.push(element);
    }
    public pop():T|never{
        if(this.isEmpty()){
            throw new Error("Stack is EMpty!");
        }
        return this.data.pop()!;
    }
    public peek():T|never{
        if(this.isEmpty()){
            throw new Error("Stack is Empty !")
        }
        return this.data.at(-1)!;
    }
    public getSize():number{
        return this.data.length;
    }
    
}


const stack=new Stack(3);
for(let i=1;i<=3;i++){
    stack.push(i);
}
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());



try{
console.log(stack.peek())
}
catch(error: Error){
    console.log(error.message);
}


console.log("asmc bkddbk")







export {};