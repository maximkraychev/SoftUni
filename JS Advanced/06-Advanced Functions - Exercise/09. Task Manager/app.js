function solve() {
    const addButtonElement = document.getElementById('add');
    const [addSection, openSection, inProgressSection, completeSection] = Array.from(document.querySelectorAll('section')).map((e) => e.children[1]);

    addButtonElement.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        const taskElement = document.getElementById('task');
        const descriptionElement = document.getElementById('description');
        const dateElement = document.getElementById('date');

        if (taskElement.value == '' || descriptionElement.value == '' || dateElement.value == '') {
            return;
        }

        const articleElement = createEl('article');
        articleElement.appendChild(createEl('h3', taskElement.value));
        articleElement.appendChild(createEl('p', `Description: ${descriptionElement.value}`));
        articleElement.appendChild(createEl('p', `Due Date: ${dateElement.value}`));

        const divElement = createEl('div', '', 'flex');

        const startButton = createEl('button', 'Start', 'green');
        divElement.appendChild(startButton);

        const deleteButton = createEl('button', 'Delete', 'red');
        divElement.appendChild(deleteButton);

        const finishButton = createEl('button', 'Finish', 'orange')
        
        articleElement.appendChild(divElement);
        openSection.appendChild(articleElement);

        taskElement.value = '';
        descriptionElement.value = '';
        dateElement.value = '';

        startButton.addEventListener('click', onStart);
        deleteButton.addEventListener('click', onDelete);
        finishButton.addEventListener('click', onFinish);

        function onStart() {
            startButton.remove();
            divElement.appendChild(finishButton);
            inProgressSection.appendChild(articleElement);
        }

        function onDelete() {
            articleElement.remove();
        }

        function onFinish() {
            divElement.remove();
            completeSection.appendChild(articleElement);
        }
    }

    function createEl(element, value, nameOfTheClass) {
        const newElement = document.createElement(element);
        if (value) {
            newElement.textContent = value;
        }

        if (nameOfTheClass) {
            newElement.className = nameOfTheClass;
        }
        return newElement;
    }
}