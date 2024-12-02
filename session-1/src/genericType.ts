{
    //generic type 


    type ArrayType<T>=Array<T>;

    const arrayNumber:ArrayType<number>=[1,2,3,4,5,6,7];
    const arrayString:ArrayType<string>=['tawhid','khan','sorker','pailot'];
    // const arrayString:Array<string>=['tawhid','khan','sorker','pailot'];
    const arrayBoolean:ArrayType<boolean>=[true,false,true,true]
    // const arrayBoolean:Array=[true,false,true,true]

        // interface 
        interface IPerson<T,U,P>{
            name:P;
            age:number;
            designation:string;
            isActive:U;
            id:T
        }
        interface IPerson<T,U,P,>{
            role:string
        }

        const person1:IPerson<number,boolean,string>={
            name:'tawhid',
            age:27,
            designation:'web developer',
            isActive:true,
            id:234,
            role:'admin'
        }

        //function type genric

        // const showMessage=<mesType1>(message:mesType1)=>{
        //     return message
        // }
        // console.log(showMessage<string>('hello bangladesh'))

        const showMessage=<mesType1,mesType2,P>(
            message1:mesType1,
            message2:mesType2,
            information:P,)=>{
            return{message1,message2,information}
        }
        console.log(showMessage<string,string,IPerson<number,boolean,string>>('hello bangladesh',
            'hi tawhid',
            {
                name:'tawhid',
                age:27,
                designation:'web developer',
                isActive:true,
                id:234,
                role:'admin'
            }
        ))


    //
}