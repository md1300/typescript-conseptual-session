const myName:string='tawhid';
const rollNumber:number=234;

const mark:number[]=[23,43,45,43,]

const info:[string,string,number,number]=['tawhid','khan',23,34]

type Person={
    name:string;
    age:number;
    isActive:boolean;
    designation:string;
    company:string;
}

const person:Person={
    name:'tawhid',
    age:27,
    isActive:true,
    designation:'web developer',
    company:'anonymous',
}

console.log({myName,rollNumber,mark,info,person})
