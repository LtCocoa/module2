let example = document.querySelector(".example");

console.log(example.offsetParent);

console.log(example.offsetLeft);
console.log(example.offsetTop);

console.log(example.offsetWidth);
console.log(example.offsetHeight);

console.log(example.clientLeft);
console.log(example.clientTop);

console.log(example.clientWidth);
console.log(example.clientHeight);

console.log(example.scrollWidth);
console.log(example.scrollHeight);

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

console.log(window.pageXOffset);
console.log(window.pageYOffset);

example.scrollTo(0, 76);
example.scrollBy(0,-390);
document.querySelector(".lighter").scrollIntoView(true);

let rect = example.getBoundingClientRect();
console.log(rect.top);
console.log(rect.left);
console.log(rect.bottom);
console.log(rect.right);

let style = window.getComputedStyle(example);
console.log(style.border);

function my_func(e) {
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.clientX);
    console.log(e.clientY);
}

function my_func2(e) {
    console.log('Обработчик клика');
}

example.onclick = my_func2;