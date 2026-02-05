
class user{
    public name:string = 'name'
    // console.log();    // error =>  Function implementation is missing or not immediately following the declaration.ts(2391)'log', which lacks return-type annotation, implicitly has an 'any' return type
    
    constructor(){
        console.log(this.name);
    }
}

