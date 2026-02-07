
const tup1: [number,number,number] = [1,2,3]     // error => [1,2,3,4]

tup1.push(5,6,7)
// console.log(tup1);


tup1.pop()
// console.log(tup1);

// console.log(tup1[2]);   // 3
// console.log(tup1[3]);      // 5 but error=> Tuple type '[number, number, number]' of length '3' has no element at index '3'.

