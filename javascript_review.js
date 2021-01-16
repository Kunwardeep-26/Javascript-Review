// string variables
var name = "Aishwarya";
console.log(name);
// length of the string
console.log(name.length);
// converting the string into upper case
console.log(name.toUpperCase());
// number variable
var number = 5;
console.log(number);
// converting a string into a number
console.log(parseInt("55"));
// Arithmetic Operations
console.log(10+20);
console.log(10-20);
console.log(10*20);
console.log(10/20);
console.log(10%20);
console.log(0/2);//0
console.log(2/0);//Infinity
//Concatenation
console.log("Hello" + " " + "Kunwar");
console.log("Bye" + 5);
//Arithmetic Operation on Strings
console.log("a"/"b"); //NaN--Not a Number
//Booleans --- false/true
var bool = true;
console.log(bool);
//Booleans are for Comparisons
console.log(2===3);
console.log(3===3);
console.log(2>3);
console.log(2<3);
console.log(2>=3);
console.log(2<=3);
console.log(2!==3);
//null
var x = null;
console.log(x);
//undefined
var y;
console.log(y);
//Conditional Programming
if(4>2){
    console.log("Happy");
}
else{
    console.log("Sad");
}
//Switch Statements
var name = "Kunwar";

switch(name){
    case "Aishwarya" : 
        console.log("Hello Aishwarya");
        break;
    case "Kunwar":
        console.log("Hello Kunwar");
        break;
    case "Dobby":
        console.log("Hello Dobby");
        break;

    default :
        console.log("No name matched");
        break;
    
}

//For loop
for(var i = 1; i<11; i++){
    console.log(i);
}
//While loop
var y=1;
while(y<9){
    console.log(y);
    y++;
}

//Arrays
var fruits = ["mango", "orange", "guava"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
fruits.push("apple", "banana");
console.log(fruits);
fruits.pop();
console.log(fruits);
//Looping over elements of array
for(var i in fruits){
    console.log(fruits[i]);
}

//Functions
function perimeter(side){
    var peri = 4*side;
    return peri;
}
console.log(perimeter(7));

function circumfrence(radius){
    var circum = 2*3.14*radius;
    return circum;
}
console.log(circumfrence(2));

//Objects
var paddle = new Object();
paddle.length = 70;
paddle.showlength= function(){
    console.log(paddle.length);
}
console.log(paddle.showlength());
console.log(paddle);