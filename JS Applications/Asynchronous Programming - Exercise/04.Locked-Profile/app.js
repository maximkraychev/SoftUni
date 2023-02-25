function lockedProfile() {
    const main = document.querySelector('#main')
    const template = main.removeChild(document.querySelector('.profile'));

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(response => response.json())
        .then(render)
        .catch(err => console.log(err))

    function render(data) {
        const arrOfData = Object.values(data);

        arrOfData.forEach((profile, index) => {
            const element = template.cloneNode(true);

            const allInputs = Array.from(element.querySelectorAll('input'));
            const [lock, unlock, username, email, age] = allInputs;
            const div = element.querySelector('div');

            lock.name = `user${index + 1}Locked`;
            unlock.name = `user${index + 1}Locked`;
            username.name = `user${index + 1}Username`;
            email.name = `user${index + 1}Email`;
            age.name = `user${index + 1}Age`;
            age.type = 'email';

            div.id = `user${index + 1}HiddenFields`;
            div.className = 'hiddenInfo';

            username.value = profile.username;
            email.value = profile.email;
            age.value = profile.age;

            const btn = element.querySelector('button');
            btn.addEventListener('click', moreInfo);
            main.appendChild(element);

            function moreInfo() {
                if (lock.checked) {
                    return
                }

                if (div.className == 'hiddenInfo') {
                    div.classList.remove('hiddenInfo');
                } else {
                    div.classList.add('hiddenInfo');
                }
            }
        })
    }
}