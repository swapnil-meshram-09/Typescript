const price: [number,number,number] = [100,200,300]
// console.log(price);

const names: [string,string,string] = ['name1','name2','name3']
// console.log(names);

// error
// const product: [string,string,number,number] = [123,'productName']
// const product: [string | number] = [123,'productName']


const product: [string,string,number,number] = ['category','name',100,2]
// console.log(product);


// custom types

type product = {
    name: string,
    quantity: number
}

const product1: [product] = [
    {
      name: 'name',
      quantity: 2
    },
]
console.log(product1);




const product2: [product,product] = [
    {
      name: 'name1',
      quantity: 2
    },
    {
      name: 'name2',
      quantity: 3
    },
]
console.log(product2);

