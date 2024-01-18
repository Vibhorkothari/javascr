// This is all about Numbers
const num = 100
console.log(num);

const num1 = new Number(100)
console.log(num1);

//convert to string

console.log(num1.toString());
console.log(num1.toString().length);
console.log(num1.toFixed(2));//eg-100.00

const precisednumber = 123.8966
console.log(precisednumber.toPrecision(4));//eg-123.9

const pre = 100000000
console.log(pre.toLocaleString('en-IN'));//used to give number in the indian form=10,00,00,000

//                  MATHS                     //

console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(4.6));
console.log(Math.floor(4.9));//used for lower value eg-4.9=4
console.log(Math.ceil(4.1));//used for upper value eg-4.1=5

console.log(Math.random());
console.log(Math.random()*10);