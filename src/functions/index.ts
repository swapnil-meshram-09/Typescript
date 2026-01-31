// normal function

// function funcName(){
//     console.log('function executed'); 
// }

// funcName()



// function with types

// default value

function funcName2(value: string='string1'){
    // console.log(`${value}`);  
}
funcName2()



// argument values

function funcName3(str: string, num: number){
    // console.log(`${str} ${num}`);
}
funcName3('string',123)



// void return 
                        // undefined = void
function funcName4(): void{
    // console.log('function executed');  
}

console.log(funcName4());
