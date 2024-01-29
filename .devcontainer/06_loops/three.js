//                  Forof loop

const arr =[1,2,3,4,5,6]
for (const i of arr) {// forof loop syntax
    console.log(i);
    }


const string="vibhor Charu"
for (const j of string) {
    console.log(`each char is ${j}`);
    
}

//  Map

const map =new Map()
map.set('EN',"English")
map.set('HI',"Hindi")
//console.log(map);

for (const [key,value] of map) {
 console.log(key ,'-' ,value);   
}

//object forof loop

// object is not iterable in this case but map is iterable