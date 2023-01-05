function search() {
   const townsElements = document.querySelectorAll('#towns li')
   const arrayOfTowns = Array.from(townsElements);
   const searchTextElement = document.getElementById('searchText');
   const searchText = searchTextElement.value

   let matches = 0;

   arrayOfTowns.forEach(town => {
      town.style.textDecoration = 'none';
      town.style.fontWeight = 'normal';

      if (town.textContent.includes(searchText)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches++;
      }
   })

   const matchesElement = document.getElementById('result');
   matchesElement.textContent = `${matches} matches found`
}
