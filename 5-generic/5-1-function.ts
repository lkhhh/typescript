{
    function checkNotNull(arg:number|null):number{ //이런 유효성 검사 함수를 타입별로 전부 만들어야 할까??
        if(arg==null){
            throw new Error('not valid number');
        }
        return arg;
    }
    const result=checkNotNull(23);
    checkNotNull(null);

    function checkNotNullAny(art:any|null):{ //나쁜예제
        if(arg==null){
            throw new Error('not valid number');
        }
        return arg;
    }
    
    function checkNotNullGE<GENERIC>(arg:GENERIC|null):GENERIC{
        if(arg==null){
            throw new Error('not valid number');
        }
        return arg;
    }
    const number=checkNotNullGE(123);
    const boal:boolean=checkNotNullGE(true);
}