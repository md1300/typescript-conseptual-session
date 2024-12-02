{
    //
    const rolls:number[]=[1,2,3,4,5,6,7,8]


    const newRolls:number[]=[18,35,...rolls,12,13,16]

    // console.log(newRolls)

    type Person={
        name:string;
        age:number;
        designation:string;
        role:string;
        salary:number;
        isActive?:boolean;

    }
    const person1 : Person= {
       name:'tawhid',
       age:27,
       designation:'web developer',
       role: 'admin ',
       salary:23000,

    }

    const person2 : Person={
       ...person1,
       isActive:true

    }

    // console.log(person2)

// rest operatot 

const [first,b,c,d,e]:string[]=['one','two','three','four','five']

const [,,,,g,...extraElement]:number[]=[1,3,2,4,5,6,7,8]

type Person3={
    name:string,
    age:number,
    designation:string,
    role:string,
    salary?:number,
}

const {name,age,designation,role,salary}:Person3={
    name:'tawhid',
    age:32,
    designation:'developer',
    role:'admin',
    salary:30000
}
// const person3:Person3={
//     name:'tawhid',
//     age:32,
//     designation:'developer',
//     role:'admin',
//     salary:30000
// }

console.log(name,salary)


    //
}