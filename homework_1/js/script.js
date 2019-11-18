//Task 1
let area = 1000;
let w = 25;
let h = 15;

let result = area % ( w * h );

document.write( `Площадь участка = ${area}<br>` );
document.write( `Длина грядки = ${h}<br>` );
document.write( `Ширина грядки = ${w}<br>` );
document.write( `Свободной площади осталось ${result} м2<br><br>` );

//Task 2
let area1 = 15 * 100;
let area2 = 600;
result = area1 - area2;

document.write( `Площадь первого овала = ${area1}<br>` );
document.write( `Площадь второго овала = ${area2}<br>` );
document.write( `Прощадь кольца ${result} см2<br><br>` );

//Task 3
let x = +prompt("X");
let y = +prompt("Y");
let z = +prompt("Z");

result = Math.min( x, y, z );

document.write( `x = ${x}<br>` );
document.write( `y = ${y}<br>` );
document.write( `z = ${z}<br>` );
document.write( `Наименьшее число = ${result}<br><br>` );

//Task 4
let a = +prompt("Первое число");
let b = +prompt("Второе число");

result = Math.abs( 10 - a ) < Math.abs( 10 - b ) ? a : b;
document.write( `a = ${a}<br>` );
document.write( `b = ${b}<br>` );
document.write( `Ближайшее к 10 число = ${result}<br><br>` );

//Task 5
let x1 = 1;
let y1 = 1;
let z1 = 1;

let x2 = 1;
let y2 = 3;
let z2 = 1;

let x3 = 3;
let y3 = 1;
let z3 = 1;

let l1 = ( x1 - x2 )**2 + ( y1 - y2 )**2 + ( z1 - z2 )**2;
let l2 = ( x1 - x3 )**2 + ( y1 - y3 )**2 + ( z1 - z3 )**2;
let l3 = ( x3 - x2 )**2 + ( y3 - y2 )**2 + ( z3 - z2 )**2;

let hypotenuse = Math.max( l1, l2, l3 );

let cathetusSum = 0;

switch( hypotenuse ) {
    case l1:
        cathetusSum = l2 + l3;
        break;
    case l2:
        cathetusSum = l1 + l3;
        break;
    case l3:
        cathetusSum = l1 + l1;
        break; 
}

result = hypotenuse === cathetusSum ? 
    "Треугольник прямоугольный" : "Треугольник не прямоугольный";

document.write( `${result}` );
