
class vehicle{
    category:string = 'bike'   
    constructor(){

    } 
    print():void{
        console.log(this.category);
        
    }
}

class bike extends vehicle {

}

const vehicle1 = new vehicle()
const bike1 = new bike()