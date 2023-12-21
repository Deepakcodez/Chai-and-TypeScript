interface person {
    name:string,
    age: number,
    student: boolean

}
 interface studentObj extends person{
    course : string,
    graduated : boolean
 }

 let student1:studentObj = {
    name: "Deepak",
    age : 20,
    student : true,
    course : "Btech" ,
    graduated : false 
    
 }
 console.log('>>>>>>>>>>>', student1)