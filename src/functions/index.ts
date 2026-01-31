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



// arguments 

function funcName3(str: string, num: number){
    // console.log(`${str} ${num}`);
}
funcName3('string',123)



// void return 
                        // undefined = void
function funcName4(): void{
    // console.log('function executed');  
}
// console.log(funcName4());



// value return 

function funcName5(str: string): string{
    return str
}
const value = funcName5('string')
// console.log(value);



// union values

function funcName6(value: string | number){
    // console.log(`${value}`);  
}
funcName6('string')



// optional 

function funcName7(value?: string){
    console.log(`${value}`);
    
}
funcName7('string')