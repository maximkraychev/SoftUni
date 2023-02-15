window.addEventListener("load", solve);

function solve() {
  const firstNameElement = document.querySelector('#first-name');
  const lastNameElement = document.querySelector('#last-name');
  const ageElement = document.querySelector('#age');
  const storyTitleElement = document.querySelector('#story-title');
  const genreElement = document.querySelector('#genre');
  const storyElement = document.querySelector('#story');
  const listWithInputElements = [firstNameElement, lastNameElement, ageElement, storyTitleElement, genreElement, storyElement];

  const publishBtn = document.querySelector('#form-btn');
  const unListElement = document.querySelector('#preview-list');

  publishBtn.addEventListener('click', publish);

  function publish() {

    for (const el of listWithInputElements) {
      if (el.value === '') {
        return;
      }
    }
    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const storyTitle = storyTitleElement.value;
    const genre = genreElement.value;
    const story = storyElement.value;

    const li = document.createElement('li');
    li.classList.add('story-info');

    const article = document.createElement('article');

    const h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName} ${lastName}`;

    const pAge = document.createElement('p');
    pAge.textContent = `Age: ${age}`;

    const pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitle}`;

    const pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genre}`;

    const pStory = document.createElement('p');
    pStory.textContent = story;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Story';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Story';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Story';

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    unListElement.appendChild(li);

    saveBtn.addEventListener('click', save);
    editBtn.addEventListener('click', edit);
    deleteBtn.addEventListener('click', del)

    listWithInputElements.forEach(el => el.value = '');
    publishBtn.disabled = true;

    function del() {
      li.remove();
      publishBtn.disabled = false;
    }

    function save() {
      const main = document.querySelector('#main');
      main.innerHTML = '';
      const h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';
      main.appendChild(h1);
    }

    function edit() {
      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      storyTitleElement.value = storyTitle;
      genreElement.value = genre;
      storyElement.value = story;

      publishBtn.disabled = false;
      li.remove();
    }
  }
}
