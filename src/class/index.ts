// classes and objects

class user{
    name:string = 'name'
    number:number = 123

    print(){
        console.log(this.name); 
    } 
}

const user1 = new user()
console.log(user1);
console.log(user1.print);
console.log(user1.print());
console.log(user1.name);

