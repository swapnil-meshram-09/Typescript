// javascript object:-

const user = {
    name: 'name',
    number: 123,          
}
// console.log(user);



// typescipt object:-

let user2: {
    name: string;
    number: number;
}

user2 = {
    name: 'name',
    number: 123 
}
// console.log(user2);




// typescript object's infer

// {
//     name: string;
//     number: number;
// }




// typescript object using type keyword

type user3 = {
    name: string;
    number: number;
}

const users: user3 = {
    name:"name",
    number: 123,
}
// console.log(users);




// object ducking

type insta = {
    username: string;
}

let web: insta = {
    username: 'name',
}

let app = {
    username: 'name',
    password: 'password'
}
// console.log(web = app);     // { username: 'name', password: 'password' }


let app2 = {    
    // Property 'username' is missing in type '{}' but required in type 'insta'.ts(2741)index.ts(56, 5): 'username' is declared here.
}
// console.log(web = app2);    // {}




// Partial variables

type password = {
    lowercase: string;
    uppercase: string;
    number: number;
    specialCharacter: string;
}

const partially: Partial<password> = {
    lowercase: 'lowercase',
}
console.log(partially);





