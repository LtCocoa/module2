/*
class Sample {
    constructor() {
        this.value = 0;
    }
    increment() {
        this.value++;
        return this;
    }
    add(num) {
        this.value += num;
        return this;
    }
    outAlert() {
        alert(this.value);
        return this;
    }
    getValue() {
        return this.value;
    }
}

let s = new Sample();
s.increment()
    .add(10)
    .increment()
    .outAlert()
    .getValue();
console.log(s);
*/

$(document).on("contextmenu", function() {
    return false;
});

$('td').filter(':odd').css('background', '#eee').end().css({'width': '40px','height': '40px'});

$('a').on('click', function() {
    window.print();
    return false;
});

$('button').one('click', function() {
    $(this).text('Clicked');
});

$('#inputText').on('input', function(e) {
    let cnt = $(this).val().length;
    $('#label').text(`${15 - cnt} symbols remaining`);
});

$('p').each(function() {
    let arr = $(this).text().split(" ");
    arr[0] = '<strong>' + arr[0] + '</strong>';
    $(this).html(arr.join(" "));
});

let temp = $('<div/>', {
    id: "test",
    css: {
        "background-color": "#eee"
    }
}).text(123);

$('body').append(temp);

let a = $('<a href="#">link</a>').on('click', function() {
    $("html").animate({"scrollTop": 0}, 5000);
    return false;
});
let ps = $('p');
a.insertAfter(ps[ps.length-1]);


$('.box_').on('click', function() {
    if($(this).parent().attr("id") === "box1") {
        $(this).detach().appendTo('#box2');
    } else {
        $(this).detach().appendTo('#box1');
    }
});

