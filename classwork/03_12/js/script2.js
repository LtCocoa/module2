document.addEventListener("DOMContentLoaded", function() {
    let presentContainer = document.getElementById("present_container");
    presentContainer.addEventListener("click", showPresent)

    let tds = document.getElementsByTagName("td");

    for(let i = 0; i < tds.length; i++) {
        tds[i].addEventListener("click", calcAction);
    }
});

function calcAction(e) {
    let type = this.textContent;
    let display = document.getElementById("display");
    switch(type) {
        case 'C':
            display.value = "";
            break;
        case '=':
            display.value = eval(display.value);
            break;
        default:
            display.value += type;
    }
}

function showPresent(e) {
    let clickElem = e.target;
    let present = clickElem.dataset.present;

    if(present) {
        clickElem.textContent = libs()[present];
        clickElem.classList.add("present");
        this.removeEventListener("click", showPresent);
    }
}

function libs() {
    return {
        "car": "машина",
        "book": "книга",
        "dog": "собака"
    }
}

