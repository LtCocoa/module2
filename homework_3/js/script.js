//task 1
let A = [ 12, 4, 3, 10, 1, 20 ];
let B = [-3, -7, -100, -33];

let C = A.concat(B);
console.log(C);

//task 2
var area = [ 1, 0, 1, 1, 1, 0, 0, 1, 0 ];
document.write("<style>td {border:1px solid black; font-size: 40px;}</style>")
document.write("<table>");
for (let i = 0; i < area.length; i++) {
    if (i % 3 == 0)
        document.write("<tr>");
    document.write("<td>");
    if (area[i] == 0)
        document.write("O");
    else if (area[i] == 1)
        document.write("X");
    document.write("</td>");
}

//task 3
let ar = [12, 4, 3, 10, 1, 20];
let minI = ar.indexOf(Math.min(...ar));
ar.splice(minI, 1);
let maxI = ar.indexOf(Math.max(...ar));
ar.splice(maxI, 1);
console.log(ar);

//task 4
let cnt = 0;
//1001 - первое значение с которого есть смысл проверять
for(let i = 1001; i <= 999999; i++) {
    let digits = (""+i).split("").map(Number);
    let l = digits.slice(0, digits.length - 3);
    let r = digits.slice(digits.length - 3);
    let sumL = l.reduce((a, b) => a + b, 0);
    let sumR = r.reduce((a, b) => a + b, 0);
    if (sumL === sumR)
        cnt++;
}
console.log(cnt);

//task 5
let weights = [2, 7, 4, 11, 8, 4];
/*
while(weights.length > 1) {
    let max1 = Math.max(...weights);
    weights.splice(weights.indexOf(max1),1);
    let max2 = Math.max(...weights);
    weights.splice(weights.indexOf(max2),1);
    let res = Math.abs(max1 - max2);
    if (res != 0)
        weights.push(res);
}
*/
let max1 = weights[0];
let max2 = weights[0];
while(weights.length > 1) {
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > max1)
            max1 = weights[i];
        else if (weights[i] > max2)
            max2 = weights[i];
    }
    let res = Math.abs(max1-max2);

    if (res != 0)
        weights.push(res);   
}

if (weights.length < 1) 
    console.log(0);
else console.log(weights);