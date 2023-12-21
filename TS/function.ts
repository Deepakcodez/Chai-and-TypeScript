type userdefinetype = (n:number , m:number) => number

const func:userdefinetype = (n,m) => {
    return n+m;
}

func(3,3)



type funOBJ = (n:number , m:number , k?:number) =>number
// ? means k is optional
const func1:funOBJ = (n,m,k) => {
    if(k===undefined) return n+m;
    return n+m+k
}
console.log('>>>>>>>>>>>',func1(3,4)
)






// rest operator 
type funOBJ1 = (...n:number[]) =>number[]
const func2:funOBJ1 = (...n)=>{
    return  n
}

console.log('>>>>>>>>>>>', func2(2,3,4))




// passing an object 
type funType =( prod:{
    name:string,
    price:number
})=>void

const prodfun:funType = (prod)=> {
     console.log('>>>>>>>>>>>', prod)
}

const prod = {
    name:"iphone",
    price:3333
}

prodfun(prod)