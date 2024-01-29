//.       ForEach loop

const abcd = [1,2,3,4,5]
abcd.forEach(function (val){
//console.log(val);
})

//you can also use arrow function in foreach loop

const bcda = [6,7,8,9,0]// also said as call back function
bcda.forEach((item)=>{ //arrow function
    //console.log(item);
})


// array having object inside it

const myarray = [
    {
        username:"vibhor",
        course : "javascript",
    },

    {
        username:"Harshita",
        course : "java",
    },


    {
        username:"aman",
        course : "c++",
    },
]
myarray.forEach((item)=>{
    console.log(item.course);
})