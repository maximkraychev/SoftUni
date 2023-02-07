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
        this.#online = true;
    }

    render(id) {    
    this.article = document.createElement('article');
    this.div1 = document.createElement('div');
    this.div1.className = 'title';
    this.button = document.createComment('button');
    this.button.innerHTML = "&#8505;";
    // this.div1.append(`${this.firstName} ${this.lastName}`, this.button);
    this.div1.textContent(`${this.firstName} ${this.lastName}`);
    this.div1.appendChild(this.button);

    this.div2 = document.createElement('div');
    this.span1 = document.createElement('span');
    this.span1.append("&phone;", this.phone);
    this.span2 = document.createElement('span');
    this.span2.append('&#9993;', this.email);
    this.div2.append(this.span1, this.span2);
    this.article.append(this.div1, this.div2);

    document.getElementById(id).appendChild(this.article);
    }
}


let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);


  