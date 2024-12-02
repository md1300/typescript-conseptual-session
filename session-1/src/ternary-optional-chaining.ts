{
    //ternary optional chaining
    type Person ={
        name:string;
        age:number;
        salary?:number|string;
        designation:string;
        role:boolean
    }

    const isAdmin:boolean=false;

    const person4:Person={
        name:'tawhid',
        age:27,
        role:true,
        designation: isAdmin?'junior developer':'senior developer',       
    }

    console.log(person4)
    //
}