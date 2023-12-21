
// method 1 
const obj: {
  name: string;
  age: number;
  student: boolean;
} = {
  name: "TS",
  age: 45,
  student: true,
};


// method 2 

type OBJ = {
    name: string;
    age: number;
    student?: boolean;   //? operator make it optional
}

const obj1:OBJ = {
  name:"JS",
  age: 45,
  student:false
}
const obj2:OBJ = {
    name:"Node",
    age:12
}