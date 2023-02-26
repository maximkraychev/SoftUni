function solution() {
    const mainSection = document.querySelector('#main');

    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(response => response.json())
        .then(renderPreview)
        .catch(err => console.log(err))

    mainSection.addEventListener('click', onClick);

    function onClick(event) {
        const btn = event.target;
        if (btn.tagName != 'BUTTON') {
            return
        }

        if (btn.textContent == 'Less') {
            const divToShow = btn.parentElement.nextSibling;
            divToShow.classList.add('extra');
            btn.textContent = 'More';
            return;
        }

        if (btn.textContent == 'More') {
            const divToHide = btn.parentElement.nextSibling;
            divToHide.classList.remove('extra');
            btn.textContent = 'Less';
            return;
        }
    }


    function renderPreview(data) {
        data.forEach(x => {
            const mainDiv = factory('div', false, 'accordion');
            const headDiv = factory('div', false, 'head', false, mainDiv);
            factory('span', x.title, false, false, headDiv);
            factory('button', 'More', 'button', x._id, headDiv);


            fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${x._id}`)
                .then(response => response.json())
                .then(moreInfo)
                .catch(err => console.log(err))

            function moreInfo(data) {
                const moreInfoDiv = factory('div', false, 'extra');
                factory('p', data.content, false, false, moreInfoDiv);
                mainDiv.appendChild(moreInfoDiv);
            }

            mainSection.appendChild(mainDiv);
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