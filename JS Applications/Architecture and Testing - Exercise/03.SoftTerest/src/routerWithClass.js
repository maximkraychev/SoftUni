/*
This is equivalent to the module router.js but with class!! 
To work add the fowlling lines in app.js after the initialization of the variable links;

const main = document.querySelector('main');
const body = document.querySelector('body');
const router = new Test(main, body, links);

*/

export class Test {
    constructor(main, body, links) {
        this.main = main;
        this.body = body;
        this.links = links;
        this.context = {
            showSection: this.showSection.bind(this),
            goTo: this.goTo.bind(this),
        }

        this.body.addEventListener('click', this.getPathname.bind(this));
    }

    showSection(section) {
        this.main.replaceChildren(section);
    }

    getPathname(event) {
        let target = event.target;

        if (target.tagName == 'IMG') {
            target = target.parentElement;
        }

        if (target.tagName == 'A') {
            event.preventDefault();
            const url = new URL(target.href);
            this.goTo(url.pathname);
        }
    }

    goTo(pathname) {
        const handler = this.links[pathname];

        if (typeof handler == 'function') {
            handler(this.context);
        }
    }
}






