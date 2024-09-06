let e = document.getElementById("element");
e.innerHTML = "<b>Hello</b>"
e.textContent = "<b>Hello</b>"
e.className = "test";

let e1 = document.querySelector("#element");

let list = document.querySelector("#list");
let li = document.createElement("li");
li.textContent = "Item 2";
list.appendChild(li);

let li2 = document.createElement("li");
li2.textContent = "Item 3";
list.appendChild(li2)

list.insertAdjacentHTML("beforeend", "<li>Item 4</li>");