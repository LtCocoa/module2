let subNums = function(a, b) {
    return a - b;
};

console.log(subNums(10, 25));
//console.log(subNums);

subNums = (a, b) => {
    return a - b;
};

/*
function delay(cb) {
    setTimeout(() => {
        cb();
    }, 2000);
}

delay(() => {
    console.log("Hello world!");
});
*/

let obj1 = new Object();
let obj2 = {};

let article = {
    id: 1,
    title: 'Photo',
    author: 'Peter',
    desc: 'article desc',
    " ": "qwe",
    null: "asd"
};

console.log(article);
console.log(article[" "]);
console.log(article.null);

article.img = "/img.jpg";
console.log(article.img);

console.log("img" in article);

for (let key in article) {
    console.log(`'${key}'`);
}

console.log(Object.keys(article).includes("id"));

articles = [{
    id: 1,
    title: "JS",
    desc: "...",
    author: "Mike",
}, {
    id: 2,
    title: "HTML",
    desc: "...",
    author: "Peter"
}];

function getData(arr, propName, propValue) {
    let arrRes = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i][propName] === propValue)
            arrRes.push(arr[i]);
    }
    return arrRes;
}

console.log(getData(articles, "author", "Mike"));

let userData = ["root", "123", 56, "Peter"];
let [login, pass, age, name] = userData;

let {id, title, desc, author} = articles[1];
console.log(title);

let obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
    }
}

let {a, b, c:{d, e}} = obj;
console.log(a);
console.log(b);
console.log(d);

let x1 = 23, x2 = 32;
[x2, x1] = [x1, x2];
console.log(x1);
console.log(x2);