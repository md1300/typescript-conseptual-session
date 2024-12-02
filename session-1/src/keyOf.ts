{
    // type of use
    type Book={
        title:string;
        author:string;
        publishYear:string

    }

    type BookKey= keyof Book;
    //

    const name:Book={
        author:'tawhid',
        title:'advantage of learning',
        publishYear:'2036'
    }
    console.log(name.author)
    //

    function getBookProperty<T,K extends keyof T> (book:T,key:K):T[K]{
       return book[key]
     }

     const myBook:Book={
       title:'advance of learning english',
       author:'tawhid',
       publishYear:'2027'

     }

     const author=getBookProperty(myBook,'title')
     console.log(author)
    //
}