function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      Array.from(document.querySelectorAll('.select')).forEach((el) => el.classList.remove('select'));

      const tableRowElement = document.querySelectorAll('tbody tr td');
      const arrayOfTableData = Array.from(tableRowElement);

      const searchTextElemet = document.getElementById('searchField');
      const searchText = searchTextElemet.value;

      arrayOfTableData.forEach(data => {
         if (data.textContent.includes(searchText) && searchText !== '') {
            const parentDataElement = data.parentElement;
            parentDataElement.classList.add('select');
         }
      });
   }
}