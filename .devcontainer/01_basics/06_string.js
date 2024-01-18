const str1 = "Vibhor"
const str2 = "kothari"

console.log(`my name is ${str1} and surname is ${str2}`);//for concatenation of strings 

//to input a string in another way

const abcd = new String("Harshita")


console.log(abcd.length);//for calculating length
console.log(abcd[0]);//provides first character of the string
console.log(abcd.__proto__);//calculate the prototype of the string
console.log(abcd.toUpperCase());
console.log(abcd.charAt(4));//gives the  character by giving position number
console.log(abcd.indexOf('h'));//gives the position of character

//calculating substring

const cap = abcd.substring(0,5)
console.log(cap);

//using of slice 
const gap = abcd.slice(-8,4)
console.log(gap);

//trim(used to remove starting space and back space)

const lpg = "    goa     "
console.log(lpg);
console.log(lpg.trim());

//replace( used for replacing any value or used for any url)

const url = "https://vibhorkothari-com"
console.log(url.replace('-','%10'));

//include (if you want to ask any question then 'include is used')

console.log(abcd.includes("vibhor"));
console.log(abcd.includes("Harshita"));