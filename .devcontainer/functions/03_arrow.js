const user= {
    username: "vibhor",
    id : "2445",
    website : function(){
    console.log(`${this.username}, welcome to web`);//this function is only used inside the object not inside the function
    console.log(this);//this gives current context of the data
    }
}
//user.website()
//user.username="sam"
//user.website()

//console.log(this);

function abcd(){
    const order = "yahoo"
    //console.log(this);
}

abcd()

//                     ARROW function

const arow = () =>{
   let username = "vibhor"
   // console.log(this);
}
arow()

//         ADD TWO FUNCTION BY ARROW FUNCTION
const addtwonumber =(num1 ,num2)=>{  //explicit return
     return num1 + num2
}
console.log(addtwonumber(5,5));

// another type to use is IMPLICIT RETURN (In this implicit type we dont use parenthesis ({}))

const addtwonum =(num1 ,num2)=>(num1 + num2)
console.log(addtwonum(5,5));

//when object is called  
const addtwo =(num1 ,num2)=>({username:"vibhor"})
console.log(addtwo(5,5));