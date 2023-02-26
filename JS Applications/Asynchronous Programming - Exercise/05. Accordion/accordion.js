function solution() {
    const mainSection = document.querySelector('#main');

    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(response => {
            if (response.ok == false) {
                throw new Error(`Error: ${respond.statusText} - ${respond.status}`)
            }
            return response.json();
        })
        .then(renderPreview)
        .catch(err => console.log(err))

    function renderPreview(data) {
        data.forEach(x => {
            const mainDiv = factory('div', false, 'accordion');
            const headDiv = factory('div', false, 'head', false, mainDiv);
            factory('span', x.title, false, false, headDiv);
            const button = factory('button', 'More', 'button', x._id, headDiv);
            const extraDiv = factory('div', false, 'extra', false, mainDiv);
            mainSection.appendChild(mainDiv);
            button.addEventListener('click', onClick);

            function onClick() {
                if (extraDiv.querySelector('p') == null) {
                    fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${x._id}`)
                        .then(response => {
                            if (response.ok == false) {
                                throw new Error(`Error: ${respond.statusText} - ${respond.status}`)
                            }
                            return response.json();
                        })
                        .then(moreInfo)
                        .catch(err => console.log(err))

                    function moreInfo(data) {
                        factory('p', data.content, false, false, extraDiv);
                    }
                }

                if (button.textContent == 'Less') {
                    extraDiv.classList.add('extra');
                    button.textContent = 'More';
                } else if (button.textContent == 'More') {
                    extraDiv.classList.remove('extra');
                    button.textContent = 'Less';
                }
            }
        })
    }

    function factory(el, text, className, id, appendTo) {
        const element = document.createElement(el);
        if (text) {
            element.textContent = text;
        }
        if (className) {
            element.classList.add(className);
        }
        if (id) {
            element.id = id;
        }
        if (appendTo) {
            appendTo.appendChild(element);
        }
        return element;
    }
}

solution()