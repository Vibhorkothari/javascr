//object can be declared by two ways 
//1.Literals
//2.Constructor

//creating  object by constructor((singleton) is used in this)
//object.create()

//creating object by literals
const user = {
    name : "vibhor",
    "Course name" : "MCA",
    email : "vibhorkothari4@gmail.com",
    loggedIn : "yes" ,
}
console.log(user.name);
console.log(user["Course name"]);//we use this method because of gap and due to string beacuse .fn cant compile it

//Interview question
//write a symbol function and add it to objects keys and print it ?

const mysym = Symbol("key1")

const ey = {
    [mysym]: "mykey1",
}
console.log(ey[mysym]);

//Changing of object values
user.name = "harshita"
user.email = "kotharivibhor@gmail.com"
console.log(user);
// If you want to fix the value that it could not get changed then use
Object.freeze(user)
user.email="abcd@gmail.com"
console.log(user); 