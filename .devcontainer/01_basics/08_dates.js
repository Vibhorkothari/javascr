// dates (it is an object asked in interviews)/(in javascript months starts from 0 eg->0=january)

let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());

// how to declare dates in javascript

let mydate1 = new Date(2023, 0, 25)
console.log(mydate1.toDateString());
let mydate2 = new Date(2023 ,2 ,1 ,5 ,30)
console.log(mydate2.toLocaleString());

//calculating milliseconds
console.log(mydate2.getTime());

let mydates = new Date()
console.log(mydates.getDate());
console.log(mydates.getDay());
console.log(mydates.getHours());
console.log(typeof mydates);