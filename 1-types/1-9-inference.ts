{
    //Type Inference
    let text='hello';
    text=1// 선언시 hello 를 주며 string 으로 결정됨
    function print(message='hello'){
        console.log(message);
    }
    
    function add(x:number,y:number):number{ //함수에서는 정확히 명시하는것이 나음
        return x+y;
    }
    const result=add(1,2);
}