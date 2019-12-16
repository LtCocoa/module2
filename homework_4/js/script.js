//task 1
let str = "1995";

let sum = 0;
for(let i = 0; i < str.length; i++) {
    sum += +str[i];
}
console.log(sum);

//task 2
let s = "javascript";
let ch = 'a';

function doubleChar(string, char) {
    let tempString = "";
    for(let i = 0; i < string.length; i++) {
        tempString += string[i];
        if(string[i] == char) {
            tempString += char;
        }
    }
    return tempString;
}

console.log(doubleChar(s, ch));

//task 3
/*
let password = prompt("Enter your password");
let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{2,})(?=.*[!@#\$%\^&\*])(?=.{9,})");
console.log(pattern.test(password));
*/

//task 4
let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let input = "Понедедьник";

for(let i = 0; i < days.length; i++) {
    if (days[i].match(input)) {
        console.log(days[i]);
        break;
    }
}