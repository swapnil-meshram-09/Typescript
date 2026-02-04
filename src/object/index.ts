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

const final = web = app

console.log(final);
