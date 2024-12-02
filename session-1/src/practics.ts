{
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    // Sample Input:
    const numberArray: number[] = [1, 2, 3, 4, 5];
    function sumArray(numberArray: number[]) {
        const result = numberArray.reduce((totalNumber, number) => totalNumber + number, 0)
        //    console.log(result)
    }

    sumArray(numberArray)


    //    problem-2 :

    const number = [2, 2, 3, 4, 7, 5, 8, 7, 4, 6, 2]

    const number2 = (num: number[]) => {
        const result = num.filter((value, index) => num.indexOf(value) === index)
        return result
    }

    const result2 = number2(number)

    //    console.log(result2)

    //    problem-3
    const name = 'i am tawhid';
    const name2 = 'tawhid';

    function getName(name: string, name2: string) {

        const result = name.split(' ').filter(value => value === name2)

        // console.log(result.length)
    }
    getName(name, name2)

    //problem -4

    type Circle = {
        radious: number;
    }
    type Rectangle = {
        height: number;
        weight: number;
    }

    function calculateShapeArea(area: Circle | Rectangle) {
        if ('height' in area && 'weight' in area) {
            const result = area.height * area.weight

            // console.log(result)
        }
        else {
            const result = Math.PI * area.radious;
            // console.log(result)
        }
    }

    calculateShapeArea({ height: 20, weight: 30 })


    //problem -5 
    type Book = {
        title: string;
        author: string;
        publishYear: number;
    }

    const myBook: Book = {
        title: 'advance of learning ',
        author: 'tawhid',
        publishYear: 2034,
    }

    // console.log(myBook.author)

    const getProperty = <T, K extends keyof T>(value: T, key: K): T[K] => {
        return value[key]
    }

    const result = getProperty(myBook, 'publishYear');
    // console.log(result)


    //problem -7 
    class Car {
        make: string;
        model: string;
        manufacturingYear: number;
        constructor(make: string, model: string, manufacturingYear: number) {
            this.make = make,
                this.model = model,
                this.manufacturingYear = manufacturingYear
        }
    }

    function getCarAge(car: Car) {
        const currentYear = new Date().getFullYear()
        const carAge = currentYear - car.manufacturingYear;
        // console.log(carAge)
        return carAge
    }

    // console.log(getCarAge({
    //     make: 'honda',
    //     model: 'sahf23',
    //     manufacturingYear: 2016,
    // }))

    //problem -8
    class Person {
        name: string;
        age: number;
        email: string
        constructor(name: string, age: number, email: string) {
            this.name = name;
            this.age = age;
            this.email = email;
        }

    }

    const person1 = <T, K extends keyof T>(value: T, key: K): boolean => {
        if (value[key]) {
            console.log('this is true')
            return true
        }
        else {
            console.log('this is false')
            return false
        }
    }
    const person: Person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    // console.log(person1(person, 'email'))
//problem -6
 
interface Profile{
    name:string;
    age:number;
    email:string;
}

const profile:Profile={
    name:'tawhid',
    age:27,
    email:'tawhid@gmail.com'
}
 function updateProfile (profile2:Profile,update2:Partial<Profile>){
    const result={...profile2,...update2}
    console.log(result)
 }

 updateProfile(profile,{age:25})







    //
}