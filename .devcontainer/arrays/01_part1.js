//In array when copy operation is done then it a shallow copies(shallow copies share the same reference as heap memory)
//Deep copy(doesnt share the same reference its like stack memory)
//array insertion

const arr1 = [0, 1, 2, 3, 4, 5, 6]
const arr2 = ["vibhor", "harshita", "babita"]
const arr3 = [true , false]
//console.log(arr1[0]);
//console.log(arr2[1]);
//console.log(arr3[0]);

// array methods

//arr1.push(7)//push function adds  the value in the array
//arr1.pop()//pop function delete the last value whatever it is 
//arr1.unshift(9) //shifts all the values at last (output- 9,1,2,3,4,5,6)
//arr1.shift()//it normal the values as they are (output- 1,2,3,4,5,6)
//console.log(arr1);

//console.log(arr1.includes(4))//ask the question from the computer that 4 is available in the array or not and result will come in boolans
//console.log(arr1.indexOf(3))//it tells what variable is present in the 3 position of the array

//const myarr = arr1.join()//used for joining the array data and convert it to string
//console.log(myarr);
//console.log(typeof myarr);

//            Slice     &      Splice         (Asked in interviews)

const myn1 = arr1.slice(1,3)//in slice only the array number which is called its value is shown eg
console.log( arr1);
console.log("A" , myn1);

const myn2 = arr1.splice(1,3)//in splice original array get manipulated or change and value also get deleted which is called eg 1 to 3 the array is deleted
console.log( arr1);
console.log("B" , myn1);