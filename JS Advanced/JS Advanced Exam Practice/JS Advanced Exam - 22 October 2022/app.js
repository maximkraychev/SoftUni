window.addEventListener("load", solve);

function solve() {
  const firstNameElement = document.querySelector('#first-name');
  const lastNameElement = document.querySelector('#last-name');
  const ageElement = document.querySelector('#age');
  const storyTitleElement = document.querySelector('#story-title');
  const ganreElement = document.querySelector('#genre');
  const storyElement = document.querySelector('#story');
  const listWithInputElements = [firstNameElement, lastNameElement, ageElement, storyTitleElement, ganreElement, storyElement];

  const publishBtn = document.querySelector('#form-btn');
  const unListElement = document.querySelector('#preview-list');

  publishBtn.addEventListener('click', publish);

  function publish() {

    const inputs = {
      firstName: firstNameElement.value,
      lastName: lastNameElement.value,
      age: ageElement.value,
      storyTitle: storyTitleElement.value,
      ganre: ganreElement.value,
      story: storyElement.value,
    }

    for (const key in inputs) {
      if (inputs[key] === '') {
        return;
      }
    }

    const liElement = factoryAndAppend('li', false, false, 'story-info');

    const articleElement = factoryAndAppend('article');
    factoryAndAppend('h4', `Name: ${inputs.firstName} ${inputs.lastName}`, articleElement);
    factoryAndAppend('p', `Age: ${inputs.age}`, articleElement);
    factoryAndAppend('p', `Title: ${inputs.storyTitle}`, articleElement);
    factoryAndAppend('p', `Genre: ${inputs.ganre}`, articleElement);
    factoryAndAppend('p', inputs.story, articleElement);
    liElement.appendChild(articleElement);

    const saveBtn = factoryAndAppend('button', 'Save Story', liElement, 'save-btn');
    const editBtn = factoryAndAppend('button', 'Edit Story', liElement, 'edit-btn');
    const deleteBtn = factoryAndAppend('button', 'Delete Story', liElement, 'delete-btn');

    unListElement.appendChild(liElement);

    listWithInputElements.forEach(x => x.value = '');
    publishBtn.disabled = true;

    editBtn.addEventListener('click', () => edit(liElement, inputs, listWithInputElements));

    saveBtn.addEventListener('click', save);

    deleteBtn.addEventListener('click', () => dalete(liElement));

  }

  function dalete(elToDelete) {
    publishBtn.disabled = false;
    elToDelete.remove();
  }

  function save() {
    const main = document.querySelector('#main');
    main.innerHTML = '';
    factoryAndAppend('h1', 'Your scary story is saved!', main);
  }

  function edit(elToDelete, inputs, inputsElement) {
    Object.values(inputs).forEach((input, index) => inputsElement[index].value = input);
    publishBtn.disabled = false;
    elToDelete.remove();
  }

  function factoryAndAppend(el, text, elToAppend, className) {
    const element = document.createElement(el);
    if (text) {
      element.textContent = text;
    }
    if (className) {
      element.classList.add(className);
    }

    if (elToAppend) {
      elToAppend.appendChild(element);
    }
    return element;
  }
}
