{
    //old:var 호이스팅 등 여러 문제있음 사용 x
    //let es6
    let name='hello';
    name='hi'
    //const

    const num:number=-6;
    //undefined
    let age:number|undefined;
    age=undefined;
    age=1;
    //null
    let persobn:null;
    let person2:string|null;

    function find():number|undefined{
        return undefined;
    }

    //unknown 가능한 사용x 자바스크립트와 연동할때 리턴타입을 모르는 경우 사용하기도 함
    let notsure:unknown=0;
    notsure='hg';
    
    //any 가능한 사용x
    let anything:any=0;
    anything='hello';

    //void 변수에는 선언해서 사용하지않음
    function print():void{
        console.log('hello');
        return;
    }

    //never
    function throwError(message:string):never{
       //throw new Error(message);
       /*while(true){

       }*/

    }

    //object 원시타입을 제외한 모든타입가능 ->안좋음
    let obj:object;
    function acceptSomeObject(obj:object){

    }
    acceptSomeObject({name:'lkh'});

}