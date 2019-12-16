//task 1
function getTime() {
    let date = new Date;
    return [date.getHours(), date.getMinutes(), date.getSeconds()];
}

const clock = document.createElement('div');
const hours = document.createElement('span');
const minutes = document.createElement('span');
const seconds = document.createElement('span');

clock.classList.add("clock");
hours.classList.add("hours");
minutes.classList.add("minutes");
seconds.classList.add("seconds");

hours.style.color = 'red';
minutes.style.color = 'green';
seconds.style.color = 'blue';

clock.append(hours, `:`, minutes, `:`, seconds);
document.body.append(clock);

setInterval(() => {
    let date = getTime();
    hours.innerHTML = date[0];
    minutes.innerHTML = date[1];
    seconds.innerHTML = date[2];
}, 1000);

//task 2
let arr = [{
    img: "img/item1.jpg",
    article: "article 1",
    description: "description 1",
},
{
    img: "img/item2.jpg",
    article: "article 2",
    description: "description 2",
},
{
    img: "img/item3.jpg",
    article: "article 3",
    description: "description 3",
},];

function f(items) {
    let container = document.createElement('div');
    container.style = `
        display: block;
    `;
    
    for(let i = 0; i < items.length; i++) {
        let divTag = document.createElement('div');
        divTag.style = `
            display: grid;
            grid-template: "a a" auto
                           "b c" auto;
            grid-template-columns: 300px auto;
            margin: 10px 0;
        `;
    
        let articleTag = document.createElement('span');
        articleTag.style = `
            font-size: 30px;
            grid-area: a;
        `;
    
        let imageTag = document.createElement('img');
        imageTag.style = `
            grid-area: b;
            width: 300px;
            height: 300px;
        `;
    
        let descTag = document.createElement('span');
        descTag.style = `
            grid-area: c;
            padding-left: 10px;
            font-size: 25px;
        `;        

        divTag.append(articleTag, imageTag, descTag);
        container.append(divTag);

        let a = [];

        for(let key in items[i]) {
            a.push(items[i][key]);
        }

        imageTag.src = a[0];
        articleTag.innerText = a[1];
        descTag.innerText = a[2];

        console.log(a);
        console.log("\n");
    }
    document.body.append(container);
}

f(arr);

//task 3
let trafficLight = document.createElement('div');
trafficLight.style = `
    display: flex;
    flex-direction: column;
`;

let lights = ["green", "yellow", "red"];
for(let l in lights) {
    console.log(l);
    let light = document.createElement('div');
    light.style = `
        width: 200px;
        height: 200px;
        background-color: grey;
        margin: 5px 0;
        border-radius: 100px;
    `;
    trafficLight.append(light);
}

document.body.append(trafficLight);

let selected = 0;

setInterval(() => {
    if(selected > 2) {
        selected = 0;
    }
    trafficLight.children[selected].style.backgroundColor = lights[selected];
    for(let i = 0; i < 3; i++) {
        if(i != selected) {
            trafficLight.children[i].style.backgroundColor = 'grey';
        }
    }
    selected++;
}, 2000);