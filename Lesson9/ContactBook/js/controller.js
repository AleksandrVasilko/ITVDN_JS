const html = document.querySelector("#contact-list");
const contactForm = document.querySelector("#contactForm");

function render(e) {
    contactList.render(contactBook.contacts, html);
};

// inputs

const firstNameInput = document.querySelector("#firstNameInput");
const lastNameInput = document.querySelector("#lastNameInput");
const phoneInput = document.querySelector("#phoneInput");
const emailInput = document.querySelector("#emailInput");
const descriptionInput = document.querySelector("#descriptionInput");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let contact = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        description: descriptionInput.value,
    }

    contactBook.add(contact);
    render();
});

function remove(id) {
    contactBook.remove(id);
    render();
}

render();