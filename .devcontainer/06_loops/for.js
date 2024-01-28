// for loop
for (let i = 0; i < 9; i++) {
    const element = i;
    if (element == 3) {
        //console.log(`3 is the main number`);
    }
   // console.log(element);
}

for (let i = 0; i <5; i++) {
    //console.log(`inner loop ${i}`);
    for (let j = 0; j < 5; j++) {
        //console.log(`outer loop ${j} and inner loop ${i}`);
        //console.log(i +'*'+ j +'='+ i*j);
    }
}


let myarray = ["v9","h9","t9","f9"]
//console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
   
    const element = myarray[i];
    //console.log(element);
    
}

for (let i = 0; i <= 20; i++) {
    const element = i;
    if(element == 5)
    {
        console.log(` 5 is found`);
        continue
    }
    console.log(element);
    
}