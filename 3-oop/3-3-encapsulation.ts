{

    type CoffeeCup={
        shots:number;
        hasMilk:boolean;
    };

    
//public 외부에서 다볼수있음
//priavate 외부에서 보기 및 접근 불가
//protected 상속시 외부에서는 접근할수 없지만 상속받은 자식에선 접근 가능
    class CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT:number=7; //외부에서 보여지지않ㅇ므
        private coffeeBeans:number=0;

        private constructor(coffeeBeans:number){
            this.coffeeBeans=coffeeBeans;
        }

        static makeMachine(coffeeBeans:number):CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        
        }

        fillCoffeeBeans(beans:number){
            if(beans<0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans=+beans;
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
    
    const maker=CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);

    class User{
        get fullName():string{
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge=4;
        get age():number{
            return this.internalAge;
        }
        set age(num:number){
            this.internalAge=num;
        }
        constructor(private firstName:string,private lastName:string){
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }
    const user=new User('steve','job');
}