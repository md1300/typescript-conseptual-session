{
    //movie name
    const movieName='DeadPool'

    //type of
    type MovieType=typeof movieName

    // const newMovie:MovieType="DeadPool"

    const movie={
        title:'rock on',
        author:'shazzad'
    }
    type MovieDetails=typeof movie
    const newMovie:MovieDetails={
           title:'234',
           author:'tawhid',
    }

    type DetailsMovie={
        message:string;
        level:'info'|'warn'|'error';
    }

    function logMessage(input:string|number|DetailsMovie){
          if(typeof input==='string'){
            console.log('simple message info :', input)
          }
          else if(typeof input==='number'){
            console.log('the number of input',input)
          }
          else{
            console.log(input)
          }
    }
   logMessage('tawhid')
   logMessage(1234)
   logMessage({
    message:'your are not good',
level:'warn'})
    
    //
}