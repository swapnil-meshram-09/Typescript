
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
// console.log(num);

// num = [3,2,1]
// console.log(num);



// tuple

let num2: readonly [number,number,number] = [4,5,6]
// console.log(num2);

// num2 = [6,5,4]
// console.log(num2);
