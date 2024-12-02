{
    //abstraction 
    class CoffeeMachine {
     private isPowerOn:boolean=false;

       powerOn(){
        this.isPowerOn=true;
        console.log('coffee machine is on')
        return 'power on'
       }

       makeCoffee(){
        if(this.isPowerOn){
            console.log('coffee brewing')
            return 'thank you'
        }
        else{
            console.log('bhai office cere baire gelam coffee khete')
            return 'thaken apnare'
        }
       }

       powerOff(){
        this.isPowerOn=false;
        console.log('coffee maching off kore dilam kew coffee khele bolen')
        return 'machine off hoye gelo'
       }
    }

    const myCoffee=new CoffeeMachine()
    console.log(myCoffee.makeCoffee())
    console.log(myCoffee.powerOff())
    console.log(myCoffee.powerOn())


    //
}