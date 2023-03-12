export function initialize(links) {
    const main = document.querySelector('main');
    //const body = document.querySelector('body');
    const nav = document.querySelector('nav');
    nav.addEventListener('click', getPathname);

    const context = {
        showSection,
        goTo,
        updateNav,
    }

    return context;

    function showSection(section) {
        main.replaceChildren(section);
    }

    function getPathname(event) {
        let target = event.target;

        if (target.tagName == 'IMG') {
            target = target.parentElement;
        }

        if (target.tagName == 'A') {
            event.preventDefault();
            const url = new URL(target.href);
            const pathname = url.pathname;
            goTo(pathname);
        }
    }

    function goTo(pathname, ...para) {
        const handler = links[pathname];

        if (typeof handler == 'function') {
            handler(context, ...para);
        }
    }

    function updateNav() {
        const user = localStorage.getItem('user');
        if (user) {
            nav.querySelectorAll('.user').forEach(x => x.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(x => x.style.display = 'none');
        } else {
            nav.querySelectorAll('.user').forEach(x => x.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(x => x.style.display = 'block');
        }
    }
}

