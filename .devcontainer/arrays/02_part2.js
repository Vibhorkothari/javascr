const Science_subjects = ["Maths" , "Physics" , "Chemistry"]
const Comm_Subjects = ["Economics" , "Bussiness" , "Management"]

//Science_subjects.push(Comm_Subjects)
//console.log(Science_subjects);
//const total = Science_subjects.concat(Comm_Subjects)
//console.log(total);

//spread operator = ...(works same as concat operator)
//const totals = [...Science_subjects , ...Comm_Subjects]
//console.log(totals);

//flat operation (used if the user want to seprate the sub array from the array then[FLAT Operation]is used)
const array1 =[ 1, 2, 3, [4 , 5], 6, 7, [8 , 9] , 10]
console.log(array1.flat(2));

// Convert string to Array directly the [FROM operation] is used
console.log(Array.from("Vibhor"));

//Of operation (used for array insertion)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
console.log(Array.of(a, b, c, d));