const form = document.querySelector('form');

form.addEventListener('submit', create);

async function create(event) {
    event.preventDefault();

    try {
        const data = new FormData(form);

        const name = data.get('name');
        const img = data.get('img');
        const ingredients = data.get('ingredients').split('\n');
        const steps = data.get('steps').split('\n');

        const request = fetch('http://localhost:3030/data/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': sessionStorage.getItem('accessToken')
            },
            body: JSON.stringify({
                name,
                img,
                ingredients,
                steps
            })
        })

        const response = await request;
        const responseData = await response.json();
        location.replace('/');

    } catch (err) {
        console.log(err);
    }
}