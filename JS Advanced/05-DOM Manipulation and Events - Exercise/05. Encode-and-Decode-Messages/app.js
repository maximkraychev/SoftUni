function encodeAndDecodeMessages() {
    const buttonsElements = document.getElementsByTagName('button');
    const textInputElements = document.getElementsByTagName('textarea');

    const inputToEncode = textInputElements[0];
    const inputToDecode = textInputElements[1];

    const encodeButton = buttonsElements[0];
    const decodeButton = buttonsElements[1];

    encodeButton.addEventListener('click', () => {

        const currentInputText = inputToEncode.value;
        let buff = '';

        for (let i = 0; i < currentInputText.length; i++) {
            const toAsciNumber = currentInputText.charCodeAt(i) + 1;
            buff += String.fromCharCode(toAsciNumber);
        }

        inputToDecode.value = buff;
        inputToEncode.value = '';
    })

    decodeButton.addEventListener('click', () => {
        const textTodecode = inputToDecode.value;
        let buff = '';

        for (let i = 0; i < textTodecode.length; i++) {
            const toAsciNumber = textTodecode.charCodeAt(i) - 1;
            buff += String.fromCharCode(toAsciNumber);
        }

        inputToDecode.value = buff;
    })
}