
class user {
    constructor(user:string, number:number){
        console.log(user);
        // console.log(this.number);  // error => Property 'number' does not exist on type 'user'.
    }
}

const user1 = new user('user',123)
console.log(user1);
