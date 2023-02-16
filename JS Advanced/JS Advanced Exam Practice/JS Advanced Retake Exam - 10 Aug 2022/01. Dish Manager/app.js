window.addEventListener("load", solve);

function solve() {
  const firstNameElement = document.querySelector('#first-name');
  const lastNameElement = document.querySelector('#last-name');
  const ageElement = document.querySelector('#age');
  const genderSelectElement = document.querySelector('#genderSelect');
  const descriptionElement = document.querySelector('#task');


  const submitBtn = document.querySelector('#form-btn');
  const ulInProgresElement = document.querySelector('#in-progress');
  const progressCountElement = document.querySelector('#progress-count');
  const ulFinishedElement = document.querySelector('#finished');
  const clearBtn = document.querySelector('#clear-btn');

  submitBtn.addEventListener('click', submit);
  clearBtn.addEventListener('click', clear);

  function submit(event) {
    event.preventDefault();

    if (validate()) {
      return;
    }

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const genderSelect = genderSelectElement.value;
    const description = descriptionElement.value;

    const li = factoryAndAppend('li', false, false, 'each-line');
    const article = factoryAndAppend('article', false, li,);
    factoryAndAppend('h4', `${firstName} ${lastName}`, article);
    factoryAndAppend('p', `${genderSelect}, ${age}`, article);
    factoryAndAppend('p', `Dish description: ${description}`, article);
    const editBtn = factoryAndAppend('button', 'Edit', li, 'edit-btn');
    const completeBtn = factoryAndAppend('button', 'Mark as complete', li, 'complete-btn');
    ulInProgresElement.appendChild(li);

    clearInputs();
    progressCountElement.textContent++;

    editBtn.addEventListener('click', edit);
    completeBtn.addEventListener('click', complete);

    function edit() {
      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      genderSelectElement.value = genderSelect;
      descriptionElement.value = description;
      li.remove();
      progressCountElement.textContent--;
    }

    function complete() {
      editBtn.remove()
      completeBtn.remove();
      ulFinishedElement.appendChild(li);
      progressCountElement.textContent--;
    }
  }

  function clear() {
    ulFinishedElement.innerHTML = '';
  }

  function validate() {
    const listOfInputs = [firstNameElement, lastNameElement, ageElement, genderSelectElement, descriptionElement];
    for (const input of listOfInputs) {
      if (input.value == '') {
        return true;;
      }
    }
    return false;
  }

  function clearInputs() {
    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    genderSelectElement.value = 'Male';
    descriptionElement.value = '';
  }

  function factoryAndAppend(el, text, whereToAppend, nameClass) {
    const element = document.createElement(el);

    if (text) {
      element.textContent = text;
    }

    if (nameClass) {
      element.classList.add(nameClass);
    }

    if (whereToAppend) {
      whereToAppend.appendChild(element);
    }
    return element;
  }
}
