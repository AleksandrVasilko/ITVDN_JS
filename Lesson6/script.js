let array = [];
let cities1 = ["London", "Paris", "Berlin", "Rome"];
cities1[1] = "ABC";
console.log(cities1);
let value = cities1[3];
console.log(value);

let cities = ["Kyiv", "Paris", "London"];
let number = [1, 2, 3, 4 ];

// console.log(cities.length);
// console.log(cities[0]);
// cities[1] = "AAAA";
// console.log(cities[1]);
// console.log(cities[10]);
// cities[10] = "Berlin";
// console.log(cities[10]);
// console.log(cities.length);
// console.log(cities);

for (let index = 0; index < cities.length; index++) { 
    const city = cities[index];
    console.log(city)
}

for (const prop in cities) {
    console.log(cities[prop]);
}

for (const city of cities) {
    console.log(city);
}