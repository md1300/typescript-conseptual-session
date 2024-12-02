{
    //class ---> object blue print ---> method
    //inheritance ---> parent class----> children class
    //abstraction ----> engin kivabe kaj kore na jene kaj siddho kora
    //encaptulation---> nijeke alada kore fela
    //polymorphism ---> class -----inheritance----function 

    class MusicInstrument {
        name:string;

        constructor(name:string){
            this.name=name;
        }
        play(){
            console.log(`playing the ${this.name}`)
            return 'good'
        }
    }

    class Guitar extends MusicInstrument{
        constructor(){
            super('Guitar')
        }

        tune(){
            console.log(`tune korce ${this.name}`)
            return 'good'
        }
    }

    class Piano extends MusicInstrument{
        constructor(){
            super('Piano')
        }
        openLid(){
            console.log(`opening the lid ... ${this.name}`)
            return 'good'
        }
    }

    const giturist = new Guitar()
    console.log(giturist.name,giturist.tune(),giturist.play())

    //
}