const names: string[] = ['name1','name2','name3']
// console.log(names);

const num: number[] = [1,2,3,4,5]
// console.log(num);

const price: Array<number> = [100,200,300]
// console.log(price);

const menu: Array<string | number> = ['foodName',100,'foodCategory',2]
// console.log(menu);



// custom types 

type product = {
    name: string,
    quantity: number
}

const product1: product[] = [
    {name: 'product1', quantity: 2},
    {name: 'product2', quantity: 3},
    {name: 'product3', quantity: 4}
]

// console.log(product1);
// console.log(product1[1]);
// console.log(product1[1]['name']);
// console.log(product1[1]['quantity']);




const product2: Array<product> = [
    {name: 'product1', quantity: 2},
    {name: 'product2', quantity: 3},
    {name: 'product3', quantity: 4}
]

// console.log(product2);
// console.log(product2[1]);
// console.log(product2[1]['name']);
// console.log(product2[1]['quantity']);

