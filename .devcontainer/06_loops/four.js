// forin loop used for all but can be used for objects also as in forof object cant be used
// in   this loop map does not get iterated
const myobject = {
    'Html' : "hyper text markup language",
     'css' : "Cascading style sheet",
     'js'  : "Javascript",
}

for (const key in myobject) {
   // console.log(key);
   // console.log(myobject[key]);
    console.log(`${key} full form is ${myobject[key]}` );
    }

    // using for arrays
    const abcd = ["ja","va","ht","ml"]
    for (const key in abcd) {
       console.log(abcd[key]);
    }
    