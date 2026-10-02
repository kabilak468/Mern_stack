console.log("This is a new file");

/* console.log(1||0) 
OUTPUT:
1
*/

//Null-coalescing operator

let a;
let b = a?? 18;
console.log(a);
console.log(b);

/* console.log(null||0||undefined); 
OUTPUT:
since there is no value..the last element as undefined will be printed.
*/

//Single line Functions and callback
function operate(op,a,b){
    return op(a,b);
}
let add=(a,b) => a+b;
let sub=(a,b) => a-b;
console.log(operate(add,3,2));

//Object creation
let car={
    name:'nexon',
    brand:'tata',
    model:2024
}

console.log(car);
delete car['model']; //Deletion
console.log(car);
car['colour']='brown'; //Insertion
console.log(car.colour);
car.colour='red'; //Updation
console.log(car.colour);