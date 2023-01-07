function toggle() {
    let buttonElement = document.getElementsByClassName('button');

    let moreTextElement = document.getElementById('extra');

    if (moreTextElement.style.display === '') {
        moreTextElement.style.display = 'none'
    }

    if (moreTextElement.style.display === 'none') {
        moreTextElement.style.display = 'block';
        buttonElement[0].textContent = 'Less';
    } else if (moreTextElement.style.display === 'block') {
        moreTextElement.style.display = 'none';
        buttonElement[0].textContent = 'More';
    }
}