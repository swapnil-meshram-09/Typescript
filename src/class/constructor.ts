
class user {
    constructor(user:string, number:number){
        // console.log(user);    // user

        // console.log(this.number);  // error => Property 'number' does not exist on type 'user'.
    }
}

const user1 = new user('user',123)
// console.log(user1);    // user {}

const user2 = new user('user2',789)




// another way

class menu {
    food: string = 'foodName'
    price: number = 120

    constructor(){
        // console.log(food);   //error
        console.log(this.food);
    }
}
const menu1 = new menu()









