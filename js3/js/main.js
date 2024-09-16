//Numbers

//An integer is a whole number.
const myNumber = 42;
console.log(myNumber);

// A number with a decimal point is a float which references the floating point.
const myFloat = 42.0;
console.log(myFloat);

const myFloat1 = 42.01;
console.log(myFloat1);

const myString = "42";
console.log(myString); //white in console

console.log(myNumber === myFloat); //true
console.log(myNumber === myFloat1); //false

//the difference in datatype is highlighted when we ask js to compute an equation

console.log(myString + 3); //concatenate 423

console.log(Number(myString)); //convert the data type to number
console.log(Number(myString)+3); //45

console.log(Number(myString)===myNumber);

console.log(Number("Sudip")); //if we use number function on data that cant be converted into number, it returns NaN.
console.log(Number(undefined));//NaN
console.log(Number(true)); //1
console.log(Number(false)); //0

//The Number.isInteger() method determines whether the passed value is an integer.

console.log(Number.isInteger("Sudip"));
console.log(Number.isInteger(myString));
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));

//The Number.parseFloat() method parses an argument and return a floating point number.
//If a number cannot be parsed from the argument , it returns NaN.

const myString1 ="42.127abc";
console.log(Number.parseFloat("Sudip")); //when float cant be retrieved
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString1));

//The toFixed() method formats a number according to how many decimal points
console.log(Number.parseFloat(myString1).toFixed(2)); //rounded off to 2

//The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myString1).toFixed(2)); //rounded off to 2

//The toString() method returns a string representing the number.
console.log(typeof myFloat.toString());

//Chaining: using several methods chained together
console.log(typeof Number.parseFloat("4.237abc").toFixed(2).toString()); 

//The Number.isNaN() method determines whether the passed value is NaN and its type is Number
console.log(Number.isNaN("Sudip")); // if "sudip"=number then true else false
 
//The global isNaN() function determines whether a value is NaN or not
console.log(isNaN("Sudip"));