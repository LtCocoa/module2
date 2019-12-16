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

