function create(words) {

   const mainDivElement = document.getElementById('content');
   const arrayWithDivs = [];

   words.forEach(word => {
      const createDivElement = document.createElement('div');
      const createParagraphElement = document.createElement('p');
      createParagraphElement.style.display = 'none';
      createParagraphElement.textContent = word;
      createDivElement.appendChild(createParagraphElement);

      createDivElement.addEventListener('click', (e) => {
         const currentParagraphElement = e.currentTarget.childNodes[0];
         currentParagraphElement.style.display = 'block'
      })

      arrayWithDivs.push(createDivElement);
   })

   arrayWithDivs.forEach(div => {
      mainDivElement.appendChild(div);
   })
}