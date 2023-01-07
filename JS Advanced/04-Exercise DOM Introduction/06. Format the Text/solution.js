function solve() {
  const inputTextElement = document.getElementById('input');
  const inputText = inputTextElement.value;

  const outputTextElement = document.getElementById('output');

  let textWithParagraph = '';

  const arrayOfTheText = inputText
  .split('.')
  .map(x => x.trim())
  .filter(x => x.length > 0);

  for (let i = 0; i < arrayOfTheText.length; i += 3) {
    let currentParagpraph = '<p>';

    for (let j = 0; j < 3; j++) {
      if (arrayOfTheText[j + i] == undefined) {
        break;
      }

      currentParagpraph += arrayOfTheText[j + i] + '.';
    }

    currentParagpraph += '</p>';
    textWithParagraph += currentParagpraph;
  }

  outputTextElement.innerHTML = textWithParagraph;
}