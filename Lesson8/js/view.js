const contactList = {
    render(contacts, element) {
        // <section class="contact">
        //     <h2>John Doe</h2>
        //     <p>Phone +1-202-555-0101</p>
        //     <p>Email": "john.doe@example.com</p>
        //     <p>Software Engineer at Tech Corp</p>
        // </section>

        contacts.forEach(contact => {
            let section = document.createElement("section");
            section.classList.add("contact");
            section.insertAdjacentHTML("beforeend", `<h2>${contact.firstName} ${contact.lastName}</h2>`);
            section.insertAdjacentHTML("beforeend", `<p>Phone: ${contact.pnone}</p>`);
            section.insertAdjacentHTML("beforeend", `<p>Email": ${contact.email}</p>`);
            section.insertAdjacentHTML("beforeend", `<p>${contact.description}</p>`);
            element.appendChild(section);
        });
    }
}
