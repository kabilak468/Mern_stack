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
    model:2024,
    price:15,
    //Function inside an object
    updatedPrice(){
        return this.price+2;
    }
}

console.log(car);
delete car['model']; //Deletion
console.log(car);
car['colour']='brown'; //Insertion
console.log(car.colour);
car.colour='red'; //Updation
console.log(car.colour);
console.log(car.updatedPrice());
for(key in car){
    console.log(key,"-",car[key]);
}

//Value Vs Reference


//Value
let m=108;
let n=m;
console.log(m,n);
n=506;
console.log(m,n);

//Reference
let x={
    name:'Kabi',
    age:18
};
let y=x;
console.log(x,y);
y.age=19;
console.log(x,y);
y={};
console.log(x,y);

//Constructor
function Multiply(){
    this.f=3;
    this.g=4;
    this.op=function(m){
        return this.f*this.g*m;
    }
}
let res=new Multiply();
console.log(res.op(0));

//Arrays
let veg=[];
veg=['Potato','Carrot'];
veg[0]='Pumpkin'; //Replacing
veg.push('Tomato');//Pushing elements at end
veg.unshift('Bean');//Pushing elements at beginning
veg.pop();//Deleting elements at end
console.log(veg);
veg.shift();//Deleting elements at beginning
for(x of veg){
    console.log(x);
}console.log('\n');
for(i in veg){
    console.log(veg[i]);
}