//object declartion
const temp = new Object()//(first method to declare a object)
//console.log(temp);

const user = {}//(second method to declare a object)
//console.log(user);

const we = {
    name : "hardik",
    username : {
        id : {
            date: "2239",
        },
    },
}
//console.log(we);
//console.log(we.name);
//console.log(we.username);
//console.log(we.username.id);

//merging and combining of objects

const obj1 = { 1: "a", 2:"b",}
const obj2 = { 3: "a", 4:"b",}
const obj3 = { 5: "a", 6:"b",}
//const obj4 = Object.assign({}, obj1 , obj2, obj3)
//console.log(obj4);

//another way of merging and combining the easy way same as used in array spread operator
 const obj4 = {...obj1, ...obj2, ...obj3 }
 //console.log(obj4); 

 //how to access or provide a output when data is given from the database

 const abc = [ {
    id: "2",
    email: "kothari@gmail.com",
 },
 {
    id: "2",
    email: "kothari@gmail.com",
 },
 {
    id: "2",
    email: "kothari@gmail.com",
 }
]
abc[1].email
//console.log(we);
//console.log(Object.keys(we));
//console.log(Object.values(we));
//console.log(Object.entries(we));

//console.log(Object.hasOwnProperty('name'));

//Destructuring of objects

const hdfc ={
    id : "67890",
    email : "hdfc@gmail.com",
}
//console.log(hdfc.email);
//Another method and mostly used by every one and that is
const {email : ml} = hdfc //(This method is used in React.Js)(This is called Destruction)
const {id : d} = hdfc
console.log(ml);
console.log(d);

//JSON TALK
//In json it is declared same as object but without any class name only with curly braces and both key and value side are in string form 
{
    "id" : "1234",
    "name" : "vibhor",
}
[
    {},// Array format also
    {},
]