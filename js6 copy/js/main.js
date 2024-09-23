//1. conditional : If Statements

let customerIsBanned =false;
let soup = "noodles soup";
let crackers = true;

if (customerIsBanned){
    reply = "No soup for you!";
} else if ( soup && crackers) {
    reply = `here's your order of ${soup} & crackers.`;
} else if (soup) {
    reply = `here's your order of ${soup}`;
} else {
    reply = "sorry, we're out of soup";
}

console.log(reply);

//2. conditional : If Statements

//09 is interpreted as octal so just write 9
let testScore = 9;
let grade;

if (testScore > 100) {
    console.log("Invalid value");
} else if (testScore <= 100 && testScore >= 80) {
    grade = "A";
} else if (testScore < 80 && testScore >= 75) {
    grade = "A-";
} else if (testScore < 75 && testScore >= 70) {
    grade = "B+";
} else if (testScore < 70 && testScore >= 65) {
    grade = "B";
} else if (testScore < 65 && testScore >= 60) {
    grade = "B-";
} else if (testScore < 60 && testScore >= 55) {
    grade = "C+";
} else if (testScore < 55 && testScore >= 50) {
    grade = "C";
} else if (testScore < 50 && testScore >= 45) {
    grade = "C-";
} else if (testScore < 45 && testScore >= 40) {
    grade = "D";
} else {
    grade = "F";
}

if (testScore <= 100) {
    console.log(grade);
}

