{

    type CoffeeCup={
        shots:number;
        hasMilk:boolean;
    };

    

    class CoffeeMaker{
        static BEANS_GRAM_PER_SHOT:number=7; //clasee level 오브젝트마다 만들거나 생성되지않음
        coffeeBeans:number=0;
        constructor(coffeeBeans:number){
            this.coffeeBeans=coffeeBeans;
        }
        static makeMachine(coffeeBeans:number):CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        
        }
        makeCoffee(shots:number):CoffeeCup{
            
            if(this.coffeeBeans<shots*CoffeeMaker.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans-=shots*CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return{
                shots,
                hasMilk:false,
            };
        }
    }
    
    const maker=new CoffeeMaker(32);
    
}