const obj1 = Object({name:'name'})
// console.log(obj1);

const obj2 = new Object({name:'name'})
// console.log(obj2);

const pi = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(pi);    
                        // {
                        //    value: 3.141592653589793,
                        //    writable: false,
                        //    enumerable: false,
                        //    configurable: false
                        // }

// const pi2 = Object.defineProperty(Math,'PI',{
//     value:3
// })
// console.log(pi2);     //TypeError: Cannot redefine property: PI




const obj3 = {
    name: 'string',
    number: 123,
    func: function() {
        console.log(this.name);
        
    }
}

const objj3 = Object.getOwnPropertyDescriptor(obj3,'name')
// console.log(objj3);

                        //   {
                        //     value: 'string',
                        //     writable: true,
                        //     enumerable: true,
                        //     configurable: true
                        //   }



const objjj3 = Object.defineProperty(obj3,'name',{
    value: 'new'
})
// console.log(objjj3);



// loop

for(let [key,value] of Object.entries(obj3)){
    // console.log(`${key}:${value}`);
                        //   {
                        //    name:new
                        //    number:123
                        //    func:function() {
                        //    console.log(this.name);
                        //   }

    if(typeof value !== 'function' ){
        // console.log(`${key}:${value}`);
        
                        // name:new
                        // number:123

    }  
                            

}

