//task 1
function arrComp(arr1, arr2) {
    if (arr1.length != arr2.length)
        return false;
    for(let i = 0; i< arr1.length; i++) {
        if(arr1[i] != arr2[i])
            return false;
    }

    return true;
}

console.log(arrComp([1,2,3,4], [1,2,3,4]));

//task 2
function range(start, end, step = 1) {
    let arI = start;
    let res = [];
    while(arI <= end) {
        res.push(arI);
        arI += step;
    }
    return res;
}

console.log(range(1, 10, 2));

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
    university: "none"
};

function log(obj) {
    for(let field in obj) {
        console.log(`${field}: ${obj[field]}`);
    }
}

log(student);

//task 4
let vovels = "аеёиоуыэюя";
let consonants = "бвгджзйклмнпрстфхцчшщ";
let newWord = "";
let wordLength = Math.floor(Math.random() * (6 - 3)) + 3;
let f = Math.random();

function rangeInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for(let i = 0; i < wordLength; i++) {
    if(f) { 
        newWord += vovels[rangeInt(0, vovels.length)];
        f = false;
    }
    else {
        newWord += consonants[rangeInt(0, consonants.length)];
        f = true;
    }
}

console.log(newWord);