// First Code Challenge

// Write code that will return a random letter from your name

console.log("SUDIP".charAt((Math.floor(Math.random()*10)+1)%5));

console.log("SUDIP".charAt(Math.floor(Math.random()*5)));

//For all names
const anyName = "Sabin";
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));