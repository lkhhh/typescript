{//js
    function jsAdd(num1,num2){
        return num1+num2;
    }
}

{//ts
    function Add(num1:number,num2:number){
        return num1+num2;
    }
}
//js
function jsFetchNum(id){
    //code.....

    return new Promise((resolve,reject)=>{
        resolve(100);
    })
}
//ts
function tsFetchNum(id:string):Promise<number>{
    //code.....

    return new Promise((resolve,reject)=>{
        resolve(100);
    })
}


//optional parameter
function printName(firstName:string,lastName?:string){// '?'는 전달받아도 되고 안받아도됨
    console.log(firstName);
    console.log(lastNmae);
}
printName('strve','Jobs');
printName('ellie');
printName('ana',undefined);

//Default parameter

function printMessage(message:string='default message'){
    console.log(message);
}
printMessage();
//Rest parameter
function addNumbers(...numbers:number[]):number{
    return numbers.reduce((a,b)=>a+b);
}
console.log(addNumbers(1,2));
console.log(addNumbers(1,2,3,4,5));

