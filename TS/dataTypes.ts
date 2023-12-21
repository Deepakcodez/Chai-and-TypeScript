let a:string = "Typescript";
console.log('>>>>>>>>>>>',a)

let b:number = 45   
console.log('>>>>>>>>>>>', b)


let c = <string>"hero"
console.log('>>>>>>>>>>> by second method', c)

let bool:boolean = true;
console.log('>>>>>>>>>>>', bool)


// union variable  --> data should be string or number
let data:String | Number;
// data = "hello universe"
data = 45;