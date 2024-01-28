const month=2
switch (month) {
    case 1:
         console.log("january"); 
        break;
    case 2:
         console.log("february"); 
        break;
    case 3:
         console.log("March"); 
        break;

    default:
        console.log("Default match");
        break;
}
//Break statement is important because if the break statement will not be their it will execute all the cases except default statement

//if string type of case then 
const m="march"
switch (m) {
    case "jan":
        console.log("january");
        
        break;
    case "feb":
        console.log("febuary");
        
        break;
    case "march":
        console.log("march");
        
        break;

    default:
        console.log("degault value");
        break;
}