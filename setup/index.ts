console.log('>>>>>>>>>>> typescript first program')

let num1:number=3;            // we have to define the type in ts
let num2:number=5;
console.log('>>>>>>>>>>>', num1+num2);



// function
function  sum(a:number,b:number):void{        //void is return type
    return console.log('>>>>>>>>>>>', a+b)
}
// sum(3,"ts")         this will not complile after config      
sum(3,4)           
// if compile the code it will compile without any error but it have an error. so we have to initialize ts config file
// in terminal      tsc --init      to create config file
// uncomment        noEmitOnError   in config file
//run code with     tsc --noEmitOnError index.ts    in terminal