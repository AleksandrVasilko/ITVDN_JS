let user1 = new Object();
let user2 = {};

let product = {
    name: "Phone",
    price: 10000,
    displayInfo: function () { 
        console.log(this.name);
        console.log(this.price);
    }
}

class Product { 
    constructor(id, name, price) { 
        this.id = id;
        this.name = name;
        this.price = price;
    }
    displayInfo () { 
        console.log(this.name);
        console.log(this.price);
    }
}

console.log(product);
console.log(product.name);
console.log(product.price);

let product2 = {};
console.log(product2);
product2.name = "Laptop";
product2.price = 50000;
product2.displayInfo = function () { 
    console.log(this.name);
    console.log(this.price);
}

console.log(product2);
console.log(product2.id);

console.log(product2.name);
console.log(product2.price);

product.displayInfo();
product2.displayInfo();

function createProduct(id, name, price) { 
    let product = {};
    product.id = id;
    product.name = name;
    product.price = price;

    return product
};

let product3 = createProduct(3, "Mause", 1500);
console.log(product3);




let product4 = new Product(4, "Monitor", 15000);
product4.displayInfo();