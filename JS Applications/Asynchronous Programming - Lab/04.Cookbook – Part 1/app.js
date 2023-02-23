const listOfPreviewElements = [];

fetch('http://localhost:3030/jsonstore/cookbook/recipes')
    .then(response => response.json())
    .then(createPreviewElements)

function createPreviewElements(response) {
    Object.values(response)
        .forEach(x => {
            const article = factory('article', false, 'preview');

            const divTitle = factory('div', false, 'title', article);
            factory('h2', `${x.name}`, false, divTitle);

            const divWithPicture = factory('div', false, 'small', article);
            factory('img', false, false, divWithPicture, x.img);
            listOfPreviewElements.push({ 'id': x._id, element: article });
        })
}

function info(event) {
    let articleElement = event.target;
    while (articleElement.className !== 'preview') {
        articleElement = articleElement.parentElement;
    }

    const index = listOfPreviewElements.findIndex(x => x.element == articleElement);
    if (index == -1) {
        return;
    }
    const id = listOfPreviewElements[index].id;
    const render = renderInfo.bind(null, articleElement);

    fetch(`http://localhost:3030/jsonstore/cookbook/details/${id}`)
        .then(response => response.json())
        .then(render)

}

function renderInfo(article, response) {
    const allIngredients = response.ingredients.map(x => `<li>${x}</li>`);
    const allPreparation = response.steps.map(x => `<p>${x}</p>`);
    article.innerHTML = `
    <h2>${response.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src=${response.img}>
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${allIngredients.join('\n')}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${allPreparation.join('\n')}
            </div>
            `
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
    main.addEventListener('click', info);
}




