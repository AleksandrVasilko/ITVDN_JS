let x = 10;
let y = 20;

// if, else

if (x > y) {
    console.log("Значення змінної х більше");
} else { 
    console.log("Значення змінної х меньше");
};

console.log("first line");

let sum = 2000;
if (sum > 1000) { 
    console.log("знижка");
} else {
    console.log("немає знижки");
}

// switch
let dayNumber = 6;
switch (dayNumber)
{ 
    case 1:
        alert("Понеділок");
        break;
    case 2:
        alert("Вівторок");
        break;
    case 2:
        alert("Середа");
        break;
    default:
        console.log("помилка");
}

// тернарний оператор
let a = 10;
let msg = (a === 10) ? 'a = 10' : 'a != 10';
console.log(msg);

// while
let counter = 0;
while (counter < 50) { 
    console.log("ітерація " + counter);
    counter++;
}

// do while виконуєтся хочяб одна ітерація
let counter1 = 100;
do { 
    console.log("ітерація " + counter1);
    counter++;
} while (counter < 50);

//for
for (let i = 0; i < 50; i++) { 
    console.log("ітерація " + i);
}