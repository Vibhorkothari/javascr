// non primitive datatypes:-

// array, object, function
//array
//const a = ["shaktiman", "thor", "captain america"];
//object
//let myObj = {
   // name:Vibhor,
   // age : 24,
//}
//function
//const Myfun = function(){
    //console.log("hello world");
//}



// two types of memeories:-
// (Stack), (Heap)

//Stack->primitive datatypes (copies the variable value)
//Heap->Non-Primitive dataypes (Reference of the value)


//Stack memory
let user = "vibhor"
let user1 = user

user1 = "kothari"

console.log(user);
console.log(user1);

//Heap memory
let userone = {
    email:"vibhorkothari@gmail.com",
    id:"1234",
}
let usertwo = userone
usertwo.email = "kotharivibhor@gmail.com"

console.log(userone.email);
console.log(usertwo.email);
