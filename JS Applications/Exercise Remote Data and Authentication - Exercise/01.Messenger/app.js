function attachEvents() {
    const authorInput = document.querySelector('input[name="author"]');
    const contentInput = document.querySelector('input[name="content"]');
    const submitBtn = document.querySelector('#submit');
    const refreshBtn = document.querySelector('#refresh');
    const messagesArea = document.querySelector('#messages');

    const url = 'http://localhost:3030/jsonstore/messenger';

    submitBtn.addEventListener('click', submit);
    refreshBtn.addEventListener('click', refresh);


    async function refresh(event) {
        event.preventDefault();
        const messages = [];

        const data = await getRequest(url);
        Object.values(data).forEach(el => messages.push(`${el.author}: ${el.content}`));
        messagesArea.textContent = messages.join('\n');
    }

    function submit(event) {
        event.preventDefault();
        const author = authorInput.value;
        const content = contentInput.value;

        const object = {
            author,
            content,
        }
        postRequest(url, object);
        authorInput.value = '';
        contentInput.value = '';
    }

    async function postRequest(url, data) {
        try {
            const request = fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const response = await request;
            return await response.json();

        } catch (err) {
            console.log(err);
        }
    }

    async function getRequest(url) {
        try {
            const request = fetch(url);
            const response = await request;
            return response.json();
            
        } catch (err) {
            console.log(err);
        }
    }
}

attachEvents();