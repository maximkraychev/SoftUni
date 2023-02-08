class Contact {
    #online
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.#online = false;
    }

    get online() {
        return this.#online;
    }

    set online(boolean) {
        this.#online = boolean;
        if (this.div1) {
            this.div1.className = this.#online ? 'title online' : 'title';
        }

    }

    createStructure() {
        // Creating the first div;
        this.article = document.createElement('article');
        this.div1 = document.createElement('div');
        this.div1.className = this.#online ? 'title online' : 'title';
        this.button = document.createElement('button');
        this.button.innerHTML = '&#8505;';
        this.div1.appendChild(document.createTextNode(`${this.firstName} ${this.lastName}`));
        this.div1.appendChild(this.button);

        // Creating the second div;
        this.div2 = document.createElement('div');
        this.div2.className = 'info';
        this.div2.style.display = 'none'
        this.span1 = document.createElement('span');
        this.span1.innerHTML = "&phone;";
        this.span1.appendChild(document.createTextNode(this.phone));
        this.span2 = document.createElement('span');
        this.span2.innerHTML = '&#9993;';
        this.span2.appendChild(document.createTextNode(this.email));
        this.div2.appendChild(this.span1);
        this.div2.appendChild(this.span2);

        // Appending the divs to the article;
        this.article.appendChild(this.div1);
        this.article.appendChild(this.div2);

        const showDivBinded = showDiv.bind(this.div2);
        this.button.addEventListener('click', showDivBinded);
        function showDiv() {
            if (this.style.display == 'block') {
                this.style.display = 'none';
            } else {
                this.style.display = 'block';
            }
        }
    }

    render(id) {
        this.createStructure();
        document.getElementById(id).appendChild(this.article);
    }
}

// let contact = new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com");
// contact.render('main');


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

//After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);

  