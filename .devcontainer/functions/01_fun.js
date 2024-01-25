function code() {
    console.log("v");
    console.log("i");
    console.log("b");
    console.log("k");
    console.log("o");
    console.log("t"); 
}
//code()


//ADD two numbers

//function addtwonumbers(number1 , number2){ //()<-this bracket value is called parameters
    //console.log(number1 + number2);
//}
//addtwonumbers(3,9)//()<-this bracket value is called arguments
//const result = addtwonumbers(3 , 9)
//console.log("Result", result);(here the value od result come underfined so to get result value we use another method)

function addtwonumbers(number1 , number2){
    let result =number1 + number2
    return result                   // here comes a major thing that if we write console.log after return statement then it is not seen or call because return function already tells that here the function ends so console.log value will only called before return statement
}
const result = addtwonumbers(3 , 9)
//console.log("Result", result);


function loginuser(username){
    if(!username )
    {
        console.log("enter the name");
        return
    }
    return ` ${username} just logged in`
}
//console.log(loginuser());


//if parameters are large in number then we use rest operator same as spread operator(syntax= ...parametername)
function giveparameter(...num1){
return num1
}
console.log(giveparameter(200,300,400,20000));

//object data convert to function
const user = {
    name:"vibhor",
    mail:"kothari@gmail.com",
}
function latest(user2){
    console.log(`name of user is ${user2.name} and mail id is ${user2.mail}`);
}
latest(user)

//array to function
const myarray = [600,700,800]

function mynewarray(array0){
return array0[1]
}
console.log(mynewarray(myarray));


