// strings
const myVariable = "Mathematics";

// The length property
console.log(myVariable.length);

//The length property on sentence itself
console.log("Hello Sudip!".length);

//string methods: charAt
console.log(myVariable.charAt(0));

//string methods: indexOf : initial value given in case of repitition
console.log(myVariable.indexOf("t"));
console.log(myVariable.indexOf("Mat"));
console.log(myVariable.indexOf("mat"));

//lastIndexOf 
console.log(myVariable.lastIndexOf("t"));

//slice
console.log(myVariable.slice(5,8));
console.log(myVariable.slice(0,11));

//slice method when ending position is not given : returns values till the end
console.log(myVariable.slice(1));

//slice method when ending position is given smaller than beginning : nothin returns
console.log(myVariable.slice(5,2));
console.log(myVariable.slice(5,2));

//slice method when consecutive no.s  :returns 1st no. only
console.log(myVariable.slice(5,6));


//toUpperCase
console.log(myVariable.toUpperCase());

//toLowerCase
console.log(myVariable.toLowerCase());

//includes method: boolean: returns true if included else false
//case sensitive 
console.log(myVariable.includes("div"));
console.log(myVariable.includes("mat"));

//split method: returns different splitted parts in array
//the character is not included in the resulting strings
console.log(myVariable.split("a"));

//returns every character as a separate string
console.log(myVariable.split(""));

//comma separated values
console.log("Hello,my,name,is,sudip".split(","));

//words from sentence: space
console.log("Hello my name is Sudip".split(" "));





