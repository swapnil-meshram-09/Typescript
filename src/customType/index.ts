
let apiRequestStatus: 'Pending' | 'Failed' | 'Success' = 'Pending'
// console.log(apiRequestStatus);

apiRequestStatus = 'Success'
// console.log(apiRequestStatus);


// custom types

type product = {
    name: string,
    quantity: number
}

const menu: product = {
    name: 'name', quantity:2
}

// console.log(product);     // 'product' only refers to a type, but is being used as a value here.
console.log(menu);
