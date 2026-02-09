
class user {
    // constructor(user:string, number:number){
        // console.log(user);    // user

        // console.log(this.number);  // error => Property 'number' does not exist on type 'user'.
    }
// }

const user1 = new user('user',123)
// console.log(user1);         // user {}
// console.log(user1.user);    // error

const user2 = new user('user2',789)




// another way

class menu {
    // food: string = 'foodName'
    // price: number = 120
    
    // when object init = constructor automatically called.
    constructor(){
        // console.log(food);   //error

        // console.log(this.food);    // foodName
    }
}
const menu1 = new menu()
// console.log(menu1);         // menu { food: 'foodName', price: 120 }



// javascript
class user3{
    constructor(name, num){
        this.name = name;
        this.num = num;
    }
    print(){
        this.name
        this.num
    }


}
const users3 = new user3('name',123)