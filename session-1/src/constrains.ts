{
    //constrains

    // const getLength:string='hello bangladesh';
    // console.log(getLength.length)

    const getLength=<T extends {length:number}>(str:T)=>{
      return str.length
    }
console.log(getLength<string>('hello bangladesh world'))
    //
}