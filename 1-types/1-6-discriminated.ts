{
    type SuccessState={
        result:'success';
        response:{
            body:string;
        };
    };
    type FailState={
        result:'fail';
        reason:string;
    };
    type LoginState=SuccessState|FailState;
    function login():LoginState{
        return{
            result:'success',
            response:{
                body:'loogged in',
            },
        };

        
    }
    function printLoginState(state:LoginState){
        if(state.result==='success'){
            //성공
        }else{
            //실패
        }
        
    }
}