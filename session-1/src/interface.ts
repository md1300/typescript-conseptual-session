{
    //type script
    type Person={
        name:string;
        age:number;
        isActive:boolean;
        designation:string;
        contactInfo?:null|string|number|undefined
    }
    

    const person:Person={
        name:'tawhid',
        age:26,
        isActive:true,
        designation:'web developer',
        contactInfo:1836438611,
    }

    console.log(person)
    //interface
    interface Person1 {
        name:string;
        age:number;
        isActive:boolean;
        designation:string;
        // contactInfo:number|null|boolean|string
    }
 
    interface Person1{
        contactInfo:number|null|boolean|string
    }
    const person1:Person1={
        name:'tawhid',
        age:26,
        isActive:true,
        designation:'web developer',
        contactInfo:1234567
    }
    // console.log(person1)
    //
}