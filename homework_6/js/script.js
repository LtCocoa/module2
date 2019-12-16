//task 1
function foo(obj, str, cnt) {
    let res = [];
    if(!obj.hasOwnProperty(str))
        return false;

    let count = obj[str];
    while(count <= cnt) {
        let tmp = {};
        for(let key in obj) {
            tmp[key] = obj[key];
        }
        tmp[str] = count;
        res.push(tmp);
        count++;
    }

    return res;
}

let a = {
    name: 'static',
    count: 2
}

console.log(foo(a, 'count', 10));

//task 2
function randRange() {
    let arr = [];
    function fillArray() {
        while(arr.length < 100) {
            let r = Math.floor(Math.random() * Math.floor(100)) + 1;
            if (arr.indexOf(r) < 0) {
                arr.push(r);
            }
        }
    }
    fillArray();
    arr.sort((a, b) => {
        return a - b;
    });
    console.log(arr);
}

randRange();

//task 3
let student = {
    name: "Denis",
    surname: "Dementyev",
    age: "24",
    interests: [
        "programming",
        "games",
        "music",
    ],
    university: "none",

    getBio() {
        console.log(`Name: ${this.name}\nSurname: ${this.surname}\nAge: ${this.age}\nInterests: ${this.interests.join(", ")}\nUniversity: ${this.university}`);
    }
};

student.getBio();

//task 4
function factorial(n) {
    if(n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

//task 5
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5},
            { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 },
            { 'price' : 8, 'count' : 4},];

arr.sort((a, b) => {
    return a.price - b.price;
});

console.log(arr);