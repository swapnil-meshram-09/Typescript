// classes and objects

class user{
    name:string = 'name'
    number:number = 123

    print(): void{
        // console.log(name);    // error => 'name' is deprecated.
        console.log(this.name);
        
    } 
}

const user1 = new user()   
console.log(user1);             // user { name: 'name', number: 123 }
console.log(user1.print);       // [Function: print]
console.log(user1.print());     // name & undefined
console.log(user1.name);        // name

