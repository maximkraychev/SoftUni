const form = document.querySelector('form');

form.addEventListener('submit', login);

async function login(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const password = formData.get('password');
    const email = formData.get('email');

    try {
        const request = fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                password,
                email,
            })
        })

        const response = await request;
        const data = await response.json();

        sessionStorage.setItem('_id', data._id);
        sessionStorage.setItem('username', data.username);
        sessionStorage  .setItem('accessToken', data.accessToken);
        location.replace('/');

    } catch (err) {
        console.log(err);
    }
}
