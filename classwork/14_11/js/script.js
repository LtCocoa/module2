/*let x = 0, i;
i = ++x;
console.log(i);*/

let checked = true;

if ( checked ) {
    console.log( checked );
}

console.log( "checked: " + checked );

let age = 23;

if ( age < 18 ) {
    console.log( "Вы не можете попасть на сайт" );
} else {
    console.log( "Welcome!" );
}

let season = "autumn";

if ( season === "summer" ) {
    document.body.style.backgroundColor = "green";
} else if ( season === "winter" ) {
    document.body.style.backgroundColor = "white";
} else if ( season === "autumn" ) {
    document.body.style.backgroundColor = "yellow";
} else if ( season === "spring" ) {
    document.body.style.backgroundColor = "pink";
} else {
    console.log( "Invalid 'season' value" );
}
/*
let salary = +prompt("Your salary"),
    workingDays = +prompt("Number of working days this month"),
    workedDays = +prompt("Number of days worked this month"),
    result;

result = salary / workingDays * workedDays * 0.87;
alert(`Your salary is ${result}`);*/
/*
let lang = +prompt("Select your language:\n1 - Russian\n2 - English\n3 - German", "1");

switch(lang) {
    case 1: 
        alert("Добро пожаловать!");
        break;
    case 2:
        alert("Welcome!")
        break;
    case 3:
        alert("Willcomen!")
        break;
    default:
        alert("Selected russian by default");
}*/

/*
let result = 0;
for(let i = 1; i < 101; i++) {
    result = result + i;
}

console.log(result);
*/

let content = "";
for(let i = 0; i<20; i++) {
    let color = "white";
    if ( i % 2 === 0 )
        color = "grey";
    content += `<tr><td style="background-color: ${color}">qwerty</td></tr>`;
}

document.write(`<table>${content}</table>`);