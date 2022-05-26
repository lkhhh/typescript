/**
 * Let's make a calculator 🧮
 */

type Command='add'|'substract'|'multiply'|'divide'|'remainder';
function calculate(calType:Command,a:number,b:number):number{
    switch(calType){
        case 'add':
            return a+b;
            break;
        case 'substract':
            return a-b;
            break;
        case 'multiply' :
            return a*b;
            break;
        case 'divide':
            return a/b;
            break;
        case 'remainder':
            return a%b;
            break;
        default:
            throw Error('unknown command');
    }
    
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
