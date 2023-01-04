function solve() {

  const firstParameterElement = document.getElementById('text');
  const secondParameterElement = document.getElementById('naming-convention');
  const outputElement = document.getElementById('result');

  const firstParameter = firstParameterElement.value;
  const secondParameter = secondParameterElement.value;

  const arrayOfFirstParameter = firstParameter.split(' ').map(x => x.toLowerCase());
  let result = '';

  switch (secondParameter) {

    case 'Camel Case':
      result += arrayOfFirstParameter[0];

      for (let index = 1; index < arrayOfFirstParameter.length; index++) {
        let currentWord = arrayOfFirstParameter[index];
        currentWord = currentWord[0].toUpperCase() + currentWord.substring(1);
        result += currentWord;
      }
      break;

    case 'Pascal Case':
      arrayOfFirstParameter.forEach(currentWord => {
        currentWord = currentWord[0].toUpperCase() + currentWord.substring(1);
        result += currentWord;
      });
      break;

    default:
      result = 'Error!'
      break;
  }

  outputElement.textContent = result;
}