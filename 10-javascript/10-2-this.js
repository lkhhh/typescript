console.log(this);
//javascript에서 this는 호출되는 문맥에따라 달라짐
function simpleFunc(){
    console.log(this);
}

simpleFunc();

class Counter{
    count=0;
    increase=function(){
        console.log(this);
    }
}

const counter=new Counter();
counter.increase();
const func=counter.increase;
const caller=counter.increase.bind(counter);
caller();//undefined

class Bob{

}

const bobo=new Bob();
bobo.run=counter.increase;
bobo.run();//bob 출력
