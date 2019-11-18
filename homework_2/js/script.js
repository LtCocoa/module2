//Task 1
let monthNumber = +prompt("Month number");
let season = "";

switch( monthNumber ) {
    case 1:
    case 2:
    case 12:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Autumn"
        break;
}

document.write(`It's ${season}<br><br>`);

//Task 2
let key = +prompt("Enter a key");
let length = +prompt("Enter lenght of L");

switch(key) {
    case 1:
        length /= 10;
        break;
    case 2:
        length *= 1000;
        break;
    case 3:
        break;
    case 4:
        length /= 1000;
        break;
    case 5:
        length /= 100;
        break;
}

document.write(`Length of L is ${length} meters<br><br>`);

//Task 3
let n = +prompt("Enter a number from -999 to 999");
let result = `${n} is a`;
let absN = Math.abs(n);

if (absN > 0) {
    if (absN < 10) {
        result += " one-digit";
    } else if ((absN >= 10) && (absN < 100)) {
        result += " two-digit";
    } else if ((absN >=100) && (absN < 1000)) {
        result += " three-digit"
    }

    if (n > 0) {
        result += " positive number";
    } else if (n < 0)
        result += " negative number";

    if ( absN > 999 ) {
        result = "The number is not in [-999; 999] range";
    }
} else {
    result = "The number is 0";
}

document.write(`${result}<br><br>`);

//Task 4
for (let i = 1; i <= 100; i++) {
    if ( (i % 3 === 0) && (i % 5 === 0) ) {
        console.log("ThreeFive");
    } else if (i % 3 === 0) {
        console.log("Three");
    } else if (i % 5 === 0) {
        console.log("Five");
    } else {
        console.log(i);
    }
}

//Task 5
let year = +prompt("Enter a year");

if ((year % 4 != 0) || (year % 100 === 0) && (year % 400 != 0)) {
    result = `${year} is a normal year`;
} else {
    result = `${year} is a leap year`;
}

document.write(`${result}<br><br>`);

//Task 6
let platesCount = +prompt("Enter number of plates");
let cleaningSupply = +prompt("Enter amount of cleaning supply");

while ((platesCount > 0) && (cleaningSupply >= 0.5)) {
    platesCount--;
    cleaningSupply-=0.5;
    console.log(`Plate cleaned! ${cleaningSupply} of cleaning supply left.`);
}

console.log(`Cleaning done! ${platesCount} plates left. ${cleaningSupply} of cleaning supply left`);