{
    //Type Assertions 안좋음

    //es)js
    function jsStrFunc():any{
        return 'hello';
    }
    const result = jsStrFunc();
    result.length //any타입이기 때문에 문자 함수를 못씀

    console.log((result as string).length);

    const wrong:any=5;
    console.log((wrong as Array<number>).push(1)); //터지는 케이스

    function findNumbers():number[]|undefined{
        return undefined;
    }
    const numbers=findNumbers();
    numbers!.push(2);// !는 무조건 null.undefined이 아니란뜻 ->안좋음

    const button = document.querySelector('class')!;
    if(button){
        button.nodeValue;
    }
}