printMyName();

function showMessage(text, repeatCount) { 
    for (i = 0; i < repeatCount; i++) { 
        console.log(text)
    }
};

showMessage("Привіт світ", 2);

function printMyName() { 
    console.log("Hello");
    console.log("My name is Alex");
};

printMyName();
printMyName();
printMyName();

function printName(name = "default") { 
    console.log("Hello");
    console.log("My name is " + name);
    console.log(`My name is ${name}`);
};

printName("Dmytro");
printName("Olena");
printName("Sasha");
printName();

let test = printName();
console.log(test);

function add(x, y) { 
    let sum = x + y;
    return sum;
}

let res = add(10, 20);
console.log(res);

function add1(x, y) {
    if (true) {
        let sum = x + y;
        return sum;
    } else { 
        console.log("123");
        return -1
    }
}

console.log(add1(5, 6));

let myGlobal = "This is global value";
console.log(myGlobal); 

if (true) { 
    let a = "local value"
    console.log("First if statement");
    console.log(myGlobal);
    console.log(a);

    if (true) { 
    console.log("Nested if statement");
    console.log(myGlobal);
    console.log(a);
    }
}

if (true) { 
    console.log("Second if statement");
    console.log(myGlobal);
    //console.log(a); //викличе помилку
}

// Варіанти створення функцій
// функція-оголошення
let result;

function add00(a, b) { 
    let temp = a + b;
    return temp;
}

result = add00(1, 2);
console.log(result);

// іменована функція-вираз
let add11 = function add(a, b) { 
    return a + b; 
}

result = add11(10, 30);
console.log(result);

//функція-вираз або анонімна функція
let add22 = function (a, b) { 
    return a + b;
}

result = add22(100, 200);
console.log(result);

//стрілочна функція (arrow function)
let add33 = (a, b) => { 
    return a + b;
}

result = add33(1000, 2000);
console.log(result);

//стрілочна функція (arrow function) без операторних дужок
let add44 = (a, b) => a + b;
result = add44(10000, 20000);
console.log(result); 