//ternary operator

 //syntax
 //condition ? ifTrue : ifFalse;

 let soup ="Noodle Soup";
 let isCustomerBanned = false;
 let soupAccess = isCustomerBanned ? "sorry, no soup for you!" 
 : soup 
 ? `Yes we have ${soup}.`
 : "Sorry no soup today"

 console.log(soupAccess);
 