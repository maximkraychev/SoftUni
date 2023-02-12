function solve() {
    const recipientNameElement = document.querySelector('#recipientName');
    const titleElement = document.querySelector('#title');
    const messageElement = document.querySelector('#message');

    const liListstOfinputs = [recipientNameElement, titleElement, messageElement];

    const resetButton = document.querySelector('#reset');
    const addButton = document.querySelector('#add');
    const ulElement = document.querySelector('#list');
    const ulSendElement = document.querySelector('.sent-list');
    const uiDeleteElement = document.querySelector('.delete-list');

    resetButton.addEventListener('click', (event) => {
        event.preventDefault();
        liListstOfinputs.forEach(x => x.value = '');
    });

    addButton.addEventListener('click', add);

    function add(event) {
        event.preventDefault();
        const recipientName = recipientNameElement.value;
        const title = titleElement.value;
        const message = messageElement.value;

        if (!recipientName || !title || !message) {
            return;
        }

        const liList = document.createElement('li');
        const h4Title = factory('h4', `Title: ${title}`,);
        const h4recipientName = factory('h4', `Recipient Name: ${recipientName}`);
        const spanMessage = factory('span', `${message}`);

        const div = document.createElement('div');
        div.setAttribute('id', 'Listst-action');
        const sendButton = factory('button', 'Send', 'send', 'submit');
        const deleteButton = factory('button', 'Delete', 'delete', 'submit');
        div.appendChild(sendButton);
        div.appendChild(deleteButton);

        liList.appendChild(h4Title);
        liList.appendChild(h4recipientName)
        liList.appendChild(spanMessage)
        liList.appendChild(div)
        ulElement.appendChild(liList);

        liListstOfinputs.forEach(x => x.value = '');

        deleteButton.addEventListener('click', onDelete);

        function onDelete(event) {
            const liElement = document.createElement('li');
            const span1 = factory('span', `To: ${recipientName}`);
            const span2 = factory('span', `Title: ${title}`);
            liElement.appendChild(span1);
            liElement.appendChild(span2);
            uiDeleteElement.appendChild(liElement);
            const elementToDelete = event.target.parentNode.parentNode;
            elementToDelete.remove();
        }

        sendButton.addEventListener('click', send);

        function send(event) {
            const liSend = document.createElement('li');
            const spanTo = factory('span', `To: ${recipientName}`);
            const spanTiitle = factory('span', `Title: ${title}`);
            const divSend = document.createElement('div');
            divSend.classList.add('btn')
            divSend.appendChild(deleteButton);
            deleteButton.removeAttribute('id');
            deleteButton.classList.add('delete')

            liSend.appendChild(spanTo)
            liSend.appendChild(spanTiitle)
            liSend.appendChild(divSend);
            ulSendElement.appendChild(liSend);
            liList.remove()
        }
    }

    function factory(el, text, id, type) {
        const element = document.createElement(el);
        element.textContent = text;
        if (id) {
            element.setAttribute('id', id);
        }

        if (type) {
            element.setAttribute('type', type);
        }
        return element;
    }
}
solve()