// truthy values and falsly values concept

const useremail="vibhorkothari4@gmail.com"
if(useremail)//this is considered as truthy value
{
    console.log(`connected`);
}
else{
    console.log(`not connected`);
}

//falsy values

//false,0,-0,bigInt 0n,"",Nan,Null,underfined

//truthy values

//"0",'false',[],{},function(){}," "


//Nullish Coalescing operator        symbol->(??): (null,undefined)

let a;
//a = 5??10
//a = null??10
//a = undefined ?? 15
//a = null ?? undefined
a = null??5??15
console.log(a);

//Terniary Operator
//condition ? true:false

const b=50
b<=50 ? console.log(`number is less than 50`) : console.log(`number is more than 50`)