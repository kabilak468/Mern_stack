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
console.log(veg.length);
console.log('\n');

//Map
let map=new Map();
map.set(1,'Kabi');
map.set(2,'Dhanu')
.set(3,'Krithiksha');
console.log(map);
console.log(map.get(2));
map.delete(1);
console.log(map.has(4));
console.log(map);
console.log(map.size);
//Iterating keys
for(x of map.keys()){
    console.log(x);
}
for(x of map.values()){
    console.log(x);
}
for(x of map){
    console.log(x);
}
map.clear();

//Set
let set=new Set();
set.add(2)
.add(3)
.add(2)
.add(1);
set.delete(3);
console.log(set.has(0));
console.log(set.size);
console.log(set);
for(x of set){
    console.log(x);
}
set.clear();

//JSON
//Object->JSON
let fruit={
    name:"Apple",
    color:"Red"
};
console.log(JSON.stringify(fruit));
//JSON->Object
let student='{"name":"Kabi","dept":"CSE"}';
console.log(JSON.parse(student));


//Date and Time
let today=new Date();
console.log(today);
let bday=new Date('2008-06-04');
console.log(bday.getFullYear());

//Recursion
function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));

/* 
Objects are created for the constructors that are written previously using the function keyword,
but in class...the constructors are created inside the class using constructor keyword without any constructor name*/
//Class
class College{
    name="KCT";
    years=43;
    disp(){ //No need of function keyword
        return this.name;
    }
}
let c=new College();
console.log(c.disp());

//Constructor inside a class
class Farmer{
    name;
    #age;//-->private access specifier
    constructor(name,age){
        this.name=name;
        this.#age=age;
    }
    disp(){
        return this.name;
    }
    //getter function
    get age(){
        return this.#age;
    }
    //setter function
    set age(age){
        this.#age=age;
    }
}
let f=new Farmer('KK',24);
console.log(f.disp());
f.age=28;//Passing values to setter function
console.log(f.age);


/*Inheritance is similar to java*/