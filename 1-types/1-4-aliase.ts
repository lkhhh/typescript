{
    //Type Aliases 새로운 타입을 정할수 있음
    type Text=string;
    const name:Text='ellie';
    const address:Text='korea';
    type Num=number;
    type Student={
        name:string;
        age:number;
    }
    const student:Student={
        name:'zz',
        age:20,
    };

    //String Literal types
    type Name='name';
    let ellieName:Name;
    ellieName='name';
    type JSON='json'
    const json:JSON='json';
    type Boal=true;
    const isCat:Boal=true;
}