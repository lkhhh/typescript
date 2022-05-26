//추상화는 인터페이스를 간단하고 심플하게 만듦으로써, 사용자가 사용하기 쉽게함
{

    type CoffeeCup={
        shots:number;
        hasMilk:boolean;
    };

    
//public 외부에서 다볼수있음
//priavate 외부에서 보기 및 접근 불가
//protected 상속시 외부에서는 접근할수 없지만 상속받은 자식에선 접근 가능

    interface CoffeeMaker{
        makeCoffee(shots:number):CoffeeCup;
    }
    interface CommercialCoffeeMaker{
        makeCoffee(shots:number):CoffeeCup;
        fillCoffeeBeans(beans:number):void;
        clean():void;
    }
    class CoffeeMachine implements CoffeeMaker,CommercialCoffeeMaker{
        private static BEANS_GRAM_PER_SHOT:number=7; //외부에서 보여지지않ㅇ므
        private coffeeBeans:number=0;

        private constructor(coffeeBeans:number){
            this.coffeeBeans=coffeeBeans;
        }

        static makeMachine(coffeeBeans:number):CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        
        }

        fillCoffeeBeans(beans:number){
            if(beans<0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans=+beans;
        }
        clean(): void {
            console.log('cleaning machine');
        }
        private grindBeans(shots){
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans<shots*CoffeeMachine.BEANS_GRAM_PER_SHOT){
                    throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans-=shots*CoffeeMachine.BEANS_GRAM_PER_SHOT;
            
        }
        private preheat():void{
            console.log('heating up...');
        }
        private extract(shots:number):CoffeeCup{
            console.log(`pulling ${shots} shots...`);
            return{
                shots,
                hasMilk:false,
            };
        }
        makeCoffee(shots:number):CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    
    

    class AmateurUser{
        constructor(private machine:CoffeeMaker){}
        makeCoffee(){
            const coffee=this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }
    class ProBarista{
        constructor(private machine:CommercialCoffeeMaker){}
        makeCoffee(){
            const coffee=this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }
    const maker:CoffeeMachine=CoffeeMachine.makeMachine(32);
    const amateur=new AmateurUser(maker);
    const pro=new ProBarista(maker);
    amateur.makeCoffee();
    pro.makeCoffee();
}