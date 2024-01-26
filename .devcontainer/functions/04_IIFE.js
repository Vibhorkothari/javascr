//.        IIFE
// iife is used to make our function invoked fastly 
// there is a lot of pollution in the global scope  which forms problem so to clear the pollution we use IIFE

(function abcd(){
    //NAMED IIFE
    console.log(`this is IIFE function`);
})();    //this is how IIFE is worked.   ===== ()()
// TO end the iife function ; is used at last

(function bcd(){
    console.log(` IIFE function`);
})();

//iife by arrow function

( (name)=> {
    console.log(name);
})('kothari');