
let user: string = 'userName'
// console.log(user);

user = 'newUserName'
// console.log(user);


// with readonly keyword

// error = 'readonly' type modifier is only permitted on array and tuple literal types.

// let number: readonly number = 123



// array

// error             ----------
//  let num: number[] readonly = [1,2,3]


let num: readonly number[] = [1,2,3]
console.log(num);
