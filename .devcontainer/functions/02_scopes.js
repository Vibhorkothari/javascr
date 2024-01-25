
if(true)
{
    let a =50
    const b = 40
    var c =90
}
//console.log(a);
//console.log(b);
//console.log(c);//thats why we dont use var in javascript thats why we mostly prefer const and let

//Nested Scopes
//(in this child can ask for anything from the parent but parent can not ask)

function abcd(){//parent
    const username = "vibhor"
    function efgh(){//child
        const website = "  youtube"
        //console.log(username + website);
    }
    efgh()
}
abcd()

if(true){
    const name ="vibhor"
    if(name === "vibhor"){
        const web = "  netflix";
        console.log(name + web);
    }
}
// interesting
console.log(number(5));// this will be called because of the good function declaration
function number(num){
    return num + 1
}

bcd(5)                 //this function is not called because of their function declaration this type is called hoisting
const bcd = function(num){
return num + 2
}
