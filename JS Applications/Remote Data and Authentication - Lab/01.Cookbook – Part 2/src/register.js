const form = document.querySelector('form');

form.addEventListener('submit', register);

async function register(event) {
    event.preventDefault();
    try {
        const data = new FormData(form);
        const email = data.get('email');
        const password = data.get('password');
        const rePass = data.get('rePass');

        if (email == '' || password == '' || rePass == '') {
            throw new Error('Fill in all fields');
        } else if (password != rePass) {
            throw new Error('Your password is incorrect');
        }

        const request = fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const response = await request;
        const responseJson = await response.json();
        console.log(responseJson);
        sessionStorage.setItem('accessToken', responseJson.accessToken);
       location.replace('/');
    
    } catch (err) {

    }
}