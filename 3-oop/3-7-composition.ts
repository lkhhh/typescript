 //상속의 깊이가 깊어질수록 관계가 복잡해짐
 //부모클래스 변경시 모든 자식클래스에 영향을 미침
 {

    type CoffeeCup={
        shots:number;
        hasMilk:boolean;
        hasSugar?:boolean;
    };

    
//public 외부에서 다볼수있음
//priavate 외부에서 보기 및 접근 불가
//protected 상속시 외부에서는 접근할수 없지만 상속받은 자식에선 접근 가능

    interface CoffeeMaker{
        makeCoffee(shots:number):CoffeeCup;
    }

   
    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT:number=7; //외부에서 보여지지않ㅇ므
        private coffeeBeans:number=0;

        public constructor(coffeeBeans:number,private milk:MilkFrother,
            private sugar:SugarProvider){
            this.coffeeBeans=coffeeBeans;
            
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
        private grindBeans(shots:number){
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
            const coffee=this.extract(shots);
            return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
        
    }

    interface MilkFrother{
        makeMilk(cup:CoffeeCup):CoffeeCup
    }
    interface SugarProvider{
        addSugar(cup:CoffeeCup):CoffeeCup
    }
    //싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk():void{
            console.log('steaming..');
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk:true,
            };
        }
    }
    class FancyMilkSteamer implements MilkFrother{
        private steamMilk():void{
            console.log('Fancy steaming..');
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk:true,
            };
        }
    }
    class ColdMilkSteamer implements MilkFrother{
        private steamMilk():void{
            console.log('steaming..');
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk:true,
            };
        }
    }
    class NoMilk implements MilkFrother{
        makeMilk(cup:CoffeeCup):CoffeeCup{
            return cup;
        }
    }
    //설탕제조기
    class CandySugarMixer implements SugarProvider{
        private getSugar(){
            console.log('getting some sugar~~');
        }
        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar=this.getSugar();
            return{
                ...cup,
                hasSugar:true,
            }
        }
    }
    class SugarMixer implements SugarProvider{
        private getSugar(){
            console.log('getting some sugar~~');
        }
        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar=this.getSugar();
            return{
                ...cup,
                hasSugar:true,
            }
        }
    }
    class NoSugar implements SugarProvider{
        addSugar(cup:CoffeeCup):CoffeeCup{
        return cup;
    }
    }

    //
    const cheapMilkMaker=new CheapMilkSteamer();
    const fancyMilkMaker=new FancyMilkSteamer();
    const coldMilkMaker=new ColdMilkSteamer()
    const noMilk = new NoMilk();

    const candySugar=new CandySugarMixer();
    const sugar=new SugarMixer()
    const noSugar = new NoSugar()
    
//
    const sweetCandyMachine=new CoffeeMachine(12,noMilk,candySugar);
    const sweetMachine=new CoffeeMachine(12,noMilk,sugar);
    
    const latteMachine=new CoffeeMachine(12,cheapMilkMaker,noSugar);
    const sweetLatteMachine=new CoffeeMachine(
        12,
        cheapMilkMaker,
        candySugar
    );
 }