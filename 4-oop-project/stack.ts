interface Stack{
    readonly size:number;
    push(value:string):void;
    pop():string;
}
type StackNode={ //불변성을 유지하는것이 좋음
    readonly value:string;
    readonly next?:StackNode;
}
class Stactimpl implements Stack{
    private _size: number=0;
    private head?:StackNode;
    get size(){
        return this._size;
    }
    push(value:string){
        const node:StackNode={value,next:this.head}
        this.head=node;
        this._size++;
    }
    pop(): string{//null==undefined
        if(this.head==null){
            throw new Error('Stack is empty');
        }
        const node = this.head;
        this.head=node.next;
        this._size--;   
        return node.value;   
    }
}

const stack =new Stactimpl();
stack.push('ere 1');
stack.push('1wegweg 2');
stack.push('wetwet3');
while(stack.size!==0){
    console.log(stack.pop());
}