const listOfPreviewElements = [];

fetch('http://localhost:3030/jsonstore/cookbook/recipes')
    .then(response => response.json())
    .then(createPreviewElements)

function createPreviewElements(response) {
    Object.values(response)
        .forEach(x => {
            console.log(x);
            const article = factory('article', false, 'preview');

            const divTitle = factory('div', false, 'title', article);
            factory('h2', `${x.name}`, false, divTitle);

            const divWithPicture = factory('div', false, 'small', article);
            factory('img', false, false, divWithPicture, x.img);
            listOfPreviewElements.push({'id': x._id, element: article});
        })
}

function factory(el, text, nameClass, appendTo, src) {
    const element = document.createElement(el);
    if (text) {
        element.textContent = text;
    }
    if (nameClass) {
        element.classList.add(nameClass);
    }
    if (src) {
        element.src = src;
    }
    if (appendTo) {
        appendTo.appendChild(element);
    }
    return element;
}


window.addEventListener('load', onLoad);
function onLoad() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    listOfPreviewElements.forEach(x => main.appendChild(x.element));
}


