"use strict";

let a = [1, 2, 3];
let b = a;

b[3] = 4;

console.log(a);
console.log(b);

let user1 = {
    name: "Sasha",
    age: 20,
}

let user2 = user1;
user2.name = "Masha";

let user3 = {};
for(let key in user1) {
    user3[key] = user1[key];
}

user3.name = "Dasha";
console.log(user1.name);
console.log(user3.name);

let user4 = {};
Object.assign(user4, user1);
console.log(user4.name);

let user5 = {...user1};
user5.name = "Petya";
console.log(user5.name);

var x = 1;
let y = 2;

function displaySquare(z) {
    let result = x * y * z;
    console.log(result);
}

displaySquare(3);

let num1 = 3, num2 = 4;

function display() {
    var num1 = 10;
    console.log(num1);
    let num2 = 8;
    console.log(num2);
}

display();

function outName(name, lastName) {
    function getName() {
        return name + " " + lastName;
    }

    return getName;
}

let getName = outName("Pepega", "123");
console.log(getName());

function createCounter() {
    let cnt = 0;
    return function() {
        return ++cnt;
    }
}

let counter = createCounter();
console.log(counter());
console.log(counter());

//Шаблоны каррирование
function diff(a) {
    return function(b) {
        return a - b;
    }
}

console.log(diff(4)(2));

/*
let arr = [];
for(let i = 0; i < 5; i++) {
    arr.push(function() {
        return i;
    });
}

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
console.log(arr[3]());
console.log(arr[4]());
*/

function myF() {
    return this;
}

//Почему window?
console.log(myF());

//Метод объекта
let myObject = {
    propA: 27,
    getA: function() {
        return this.propA;
    },
}

console.log(myObject.getA());

let user = {
    name: "qwe",
    getUserName() {
        return this.name;
    }
}

let func = user.getUserName;
console.log(func.call({name: "321"}));  //передача
console.log(func.apply(user));          //контекста

function writeN(n) {
    if (n >= 0) {
        console.log(n);
        writeN(n-1);
    }
}

writeN(3);

let arr5 = [1, 2, 3, 11, 22, 33];
arr5.sort((n1, n2) => {
    if (n1 > n2)
        return 1;
    else if (n1 < n2)
        return -1;
    else 
        return 0;

    return n1 - n2;
});
console.log(arr5);