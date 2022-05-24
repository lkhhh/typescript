{
    //array
    const furits:string[]=['apple','banana'];
    const scroes:Array<number>=[1,3,4];
    function printArray(fruits:readonly string[]){

    }

    //Tuple ->권장 x  (interface,type alias,class 로 대체)
    let student:[string,number];
    student=['name',123];
    student[0]//name
    student[1]//123 데이터 index접근은 가독성이 떨어짐

    const [name,age]=student;
}