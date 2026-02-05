
abstract class user {
    username:string = 'name'
    abstract password:string
    // abstract password:string = ''    // error => Property 'password' cannot have an initializer because it is marked abstract.
}

// const user1 = new user()    // error => Cannot create an instance of an abstract class.


